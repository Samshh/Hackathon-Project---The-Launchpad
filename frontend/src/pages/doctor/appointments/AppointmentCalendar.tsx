import { useShallow } from "zustand/react/shallow";
import AppointmentTimeBlockGrid from "./AppointmentTimeBlockGrid";
import useAppointmentsStore from "./store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { areDatesEqual } from "@/lib/utils";

const daysOfTheWeek = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
];

export default function AppointmentCalendar() {
  const [
    _,
    getActiveMonthYearText,
    getActiveWeekDays,
    goToPreviousWeek,
    goToNextWeek
  ] = useAppointmentsStore(
    useShallow((state) => [
      state.activeWeekFirstDay,
      state.getActiveMonthYearText,
      state.getActiveWeekDays,
      state.goToPreviousWeek,
      state.goToNextWeek
    ])
  );

  return (
    <div className="flex-grow w-full flex flex-col justify-start items-stretch bg-white rounded-md shadow-md overflow-hidden">
      <div className="flex flex-row justify-between items-center border-b p-4 border-gray-200">
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="flex flex-row justify-start items-center gap-2">
            <Button variant="outline" size="icon" onClick={goToPreviousWeek}>
              <ChevronLeft size={16} />
            </Button>

            <Button variant="outline" size="icon" onClick={goToNextWeek}>
              <ChevronRight size={16} />
            </Button>
          </div>

          <p className="text-xl font-semibold">{getActiveMonthYearText()}</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-start items-stretch select-none border-b border-gray-200 overflow-hidden">
        <div className="min-h-16 flex flex-row justify-start items-stretch border-b border-gray-200 shadow-sm">
          <div className="w-20 flex justify-center items-center border-r border-gray-200">
            <p className="text-xs font-semibold text-gray-400">GMT-8</p>
          </div>

          {getActiveWeekDays().map((day, index) => (
            <div key={index} className="flex-grow flex flex-col justify-center items-center">
              <p className="text-xs font-semibold text-gray-400">{daysOfTheWeek[index]}</p>
              <p 
                className={`py-0.5 px-1.5 ${areDatesEqual(day, new Date()) ? 'rounded-full bg-accent text-white' : 'text-gray-600'}`}
              >
                {day.getDate()}
              </p>
            </div>
          ))}
        </div>

        <AppointmentTimeBlockGrid />
      </div>
    </div>    
  )
}