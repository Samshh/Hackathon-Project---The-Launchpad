import { useMemo, useState } from "react";
import useAppointmentsStore from "./store";
import { useShallow } from "zustand/react/shallow";
import { differenceInCalendarDays, isWithinInterval } from "date-fns";


export default function AppointmentTimeBlockGrid() {
  const [isHovering, setIsHovering] = useState(false);
  const [offsetTop, setOffsetTop] = useState(-1);
  const hoveredHour = useMemo(() => Math.floor(offsetTop / 160), [offsetTop]);
  const hoveredMinutes = useMemo(() => Math.floor(offsetTop % 160 / 160 * 60), [offsetTop]);

  const [
    activeWeekFirstDay,
    // appointments,
    getActiveWeekLastDay,
  ] = useAppointmentsStore(
    useShallow((state) => [
      state.activeWeekFirstDay,
      // state.appointments,
      state.getActiveWeekLastDay,
    ])
  );

  const [
    toggleOpenSheet,
    closeSheet
  ] = useGlobalComponentStore(
    useShallow((state) => [
      state.toggleOpenSheet,
      state.closeSheet,
    ])
  )

  return (
    <div className="flex-grow overflow-y-auto">
      <div
        className="relative min-h-full grid grid-rows-[repeat(24,_160px)] grid-cols-[80px_repeat(7,_1fr)]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseMove={(e) => setOffsetTop(e.clientY - e.currentTarget.getBoundingClientRect().top)}
        onMouseLeave={() => {
          setIsHovering(false);
          setOffsetTop(-1);
        }}
      >
        {[...Array(24)].map((_, hourIndex) => (
          <div
            className="grid row-span-1 col-span-full grid-cols-subgrid"
            key={`hour-${hourIndex}`}
          >
            <div className="col-span-1 relative w-20 flex flex-col justify-start items-end border-r border-gray-200 p-2">
              <p className="text-xs font-semibold text-gray-400">{hourIndex.toString().padStart(2, "0")}:00</p>
            </div>

            {[...Array(7)].map((_, weekIndex) => (
              <div
                key={`hour-${hourIndex}-week-${weekIndex}`}
                className="border-b border-r border-gray-200"
              />
            ))}
          </div>
        ))}

        {appointments.map((appointment) => {
          const appointmentEtaObject = new Date(appointment.eta);

          if (!isWithinInterval(appointmentEtaObject, {
            start: activeWeekFirstDay,
            end: getActiveWeekLastDay()
          })) {
            return null;
          }

          const gridColumnStart = differenceInCalendarDays(appointmentEtaObject, activeWeekFirstDay) + 2;
          const isBefore = differenceInCalendarDays(appointmentEtaObject, new Date()) < 0;
          const hourOffsetTop = appointmentEtaObject.getHours() * 160 + appointmentEtaObject.getMinutes() / 60 * 160;

          return (
            <button
              key={`appointment-${appointment.appointmentId}`}
              className="absolute w-full h-40 flex flex-row justify-center items-stretch p-2"
              style={{
                gridColumnStart: gridColumnStart,
                gridColumnEnd: gridColumnStart + 1,
                top: hourOffsetTop,
              }}
              onClick={() => {
                console.log("CLICKED!");
                console.log(`DAY OF THE WEEK: ${gridColumnStart - 2}`);
                console.log(`HOVERED HOURS: ${hoveredHour}`);
                console.log(`HOVERED MINUTES: ${hoveredMinutes}`);

                toggleOpenSheet(
                 <AppointmentSheetContent appointmentId={appointment.appointmentId} />
                );                
              }}
              
            >
              <div className={`
                flex-grow flex flex-col justify-between items-start text-sm rounded-md shadow-md px-2 py-1 cursor-pointer border
                ${appointment.status === 0 ? 'border-red-300 bg-red-50 hover:bg-red-100' :
                  isBefore ? 'border-green-300 bg-green-50 hover:bg-green-100' :
                    'border-yellow-300 bg-yellow-50 hover:bg-yellow-100'
                }
              `}>
                <div className="flex flex-col justify-start items-start">
                  <p className="font-semibold">{appointment.patientName}</p>
                  {appointment.reason && (
                    <p className="text-gray-500">{appointment.reason}</p>
                  )}
                </div>

                <p className="text-gray-500">
                  {appointmentEtaObject.getHours()}:{appointmentEtaObject.getMinutes()} - {appointmentEtaObject.getHours() + 1}:{appointmentEtaObject.getMinutes()}
                </p>
              </div>
            </button>
          );
        })}

        {isHovering && (
          <div
            className="w-full absolute left-20 flex flex-row justify-end items-center pointer-events-none"
            style={{
              top: offsetTop,
            }}
          >
            <span className="absolute top-0 right-full text-xs text-white bg-accent rounded-full px-2 py-1 -translate-y-1/2">
              {hoveredHour.toString().padStart(2, "0")}:{hoveredMinutes.toString().padStart(2, "0")}
            </span>
            <hr className="w-full border-dashed border-accent border-t" />
          </div>
        )}
      </div>
    </div>
  )
}