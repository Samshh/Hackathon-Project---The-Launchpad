import { isWithinInterval, differenceInCalendarDays, format } from 'date-fns';
import { useMemo, useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { CalendarAppointment, CalendarFloatingTimeBlock } from './types';
import { cn } from '@/lib/utils';

interface WeeklyCalendarTimeBlockGridProps {
  activeWeekFirstDay: Date;
  appointments?: CalendarAppointment[];
  floatingTimeBlocks?: CalendarFloatingTimeBlock[];
  onCalendarClick?: (selectedDateTime: Date) => void;
  onFloatingTimeBlockClick?: (selectedTimeBlock: any) => void;
  startTimeAndEndTimeSeparator?: React.ReactNode;
}

const appointments = [
  {
    id: 1,
    eta: new Date(2024, 6, 25, 10, 30),
    patient: 'Juan Dela Cruz',
    reason: 'Checkup',
    status: 0,
  },
  {
    id: 2,
    eta: new Date(2024, 6, 24, 18, 45),
    patient: 'Maria Clara',
    reason: 'Checkup',
    status: 1,
  },
  {
    id: 3,
    eta: new Date(2024, 6, 26, 10, 30),
    patient: 'Jose Rizal',
    reason: 'Checkup',
    status: 1,
  },
];

export default function WeeklyCalendarTimeBlockGrid({
  activeWeekFirstDay,
  floatingTimeBlocks,
  onCalendarClick,
  onFloatingTimeBlockClick,
  startTimeAndEndTimeSeparator,
}: WeeklyCalendarTimeBlockGridProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [offsetTop, setOffsetTop] = useState(-1);
  const hoveredHour = useMemo(() => Math.floor(offsetTop / 160), [offsetTop]);
  const hoveredMinutes = useMemo(() => Math.floor(((offsetTop % 160) / 160) * 60), [offsetTop]);

  const activeWeekLastDay = useMemo(() => {
    const lastDay = new Date(activeWeekFirstDay);
    lastDay.setDate(lastDay.getDate() + 6);
    return lastDay;
  }, [activeWeekFirstDay]);

  return (
    <ScrollArea className="basis-px flex-grow overflow-y-auto">
      <div
        className={`
          relative min-h-full grid grid-rows-[repeat(24,_160px)] grid-cols-[80px_repeat(7,_1fr)]
          ${onCalendarClick ? 'cursor-pointer' : ''}
        `}
        onMouseEnter={() => setIsHovering(true)}
        onMouseMove={(e) => setOffsetTop(e.clientY - e.currentTarget.getBoundingClientRect().top)}
        onMouseLeave={() => {
          setIsHovering(false);
          setOffsetTop(-1);
        }}
      >
        {[...Array(24)].map((_, hourIndex) => (
          <div className="grid row-span-1 col-span-full grid-cols-subgrid" key={`hour-${hourIndex}`}>
            <div className="col-span-1 relative w-20 flex flex-col justify-start items-end border-r border-gray-200 p-2">
              <p className="text-xs font-semibold text-gray-400">{hourIndex.toString().padStart(2, '0')}:00</p>
            </div>

            {[...Array(7)].map((_, weekIndex) => (
              <div
                key={`hour-${hourIndex}-week-${weekIndex}`}
                className="border-b border-r border-gray-200"
                {...(onCalendarClick
                  ? {
                      onClick: () => {
                        const selectedDateTime = new Date(activeWeekFirstDay);
                        selectedDateTime.setDate(selectedDateTime.getDate() + weekIndex);
                        selectedDateTime.setHours(hoveredHour);
                        selectedDateTime.setMinutes(hoveredMinutes);
                        onCalendarClick(selectedDateTime);
                      },
                    }
                  : {})}
              />
            ))}
          </div>
        ))}

        {floatingTimeBlocks &&
          floatingTimeBlocks.length > 0 &&
          floatingTimeBlocks.map((floatingTimeBlock) => {
            if (
              floatingTimeBlock.dayOfTheWeek === undefined &&
              floatingTimeBlock.startTime &&
              !isWithinInterval(floatingTimeBlock.startTime, {
                start: activeWeekFirstDay,
                end: activeWeekLastDay,
              })
            ) {
              return null;
            }

            let gridColumnStart;
            if (floatingTimeBlock.dayOfTheWeek === undefined) {
              gridColumnStart = differenceInCalendarDays(floatingTimeBlock.startTime, activeWeekFirstDay) + 2;
            } else {
              gridColumnStart = floatingTimeBlock.dayOfTheWeek + 1;
            }

            const hourOffsetTop =
              floatingTimeBlock.startTime.getHours() * 160 + (floatingTimeBlock.startTime.getMinutes() / 60) * 160;

            let hourHeight;
            if (floatingTimeBlock.dayOfTheWeek === undefined) {
              hourHeight = floatingTimeBlock.endTime
                ? differenceInCalendarDays(floatingTimeBlock.startTime, floatingTimeBlock.endTime) * 160
                : 160;
            } else {
              let startHours = floatingTimeBlock.startTime.getHours();
              startHours += floatingTimeBlock.startTime.getMinutes() / 60;

              let endTime = floatingTimeBlock.endTime as Date;
              let endHours = endTime.getHours();
              endHours += endTime.getMinutes() / 60;

              let hourDifference = endHours - startHours;

              hourHeight = hourDifference * 160;
            }

            return (
              <button
                key={`floating-time-block-${floatingTimeBlock.id}`}
                onClick={() => {
                  if (onFloatingTimeBlockClick) {
                    onFloatingTimeBlockClick({
                      id: floatingTimeBlock.id,
                      startTime: floatingTimeBlock.startTime,
                      endTime: floatingTimeBlock.endTime,
                      dayOfTheWeek: floatingTimeBlock.dayOfTheWeek,
                    });
                  }
                }}
                className={cn(
                  'absolute w-full flex justify-center items-center p-1 bg-gray-100 rounded-md shadow-md',
                  floatingTimeBlock.className,
                )}
                style={{
                  top: hourOffsetTop,
                  gridColumnStart: gridColumnStart,
                  gridColumnEnd: gridColumnStart + 1,
                  height: `${hourHeight}px`,
                }}
              >
                <p>{format(floatingTimeBlock.startTime, 'HH:mm')}</p>
                {startTimeAndEndTimeSeparator && startTimeAndEndTimeSeparator}
                {floatingTimeBlock.endTime && <p>{format(floatingTimeBlock.endTime, 'HH:mm')}</p>}
              </button>
            );
          })}

        {appointments &&
          appointments.length === 0 &&
          appointments.map((appointment) => {
            if (
              !isWithinInterval(appointment.eta, {
                start: activeWeekFirstDay,
                end: activeWeekLastDay,
              })
            ) {
              return null;
            }

            const gridColumnStart = differenceInCalendarDays(appointment.eta, activeWeekFirstDay) + 2;
            const isBefore = differenceInCalendarDays(appointment.eta, new Date()) < 0;
            const hourOffsetTop = appointment.eta.getHours() * 160 + (appointment.eta.getMinutes() / 60) * 160;

            // TODO: Make element show right side dialog on click
            return (
              <button
                key={`appointment-${appointment.id}`}
                className="absolute w-full h-40 flex flex-row justify-center items-stretch p-2"
                style={{
                  gridColumnStart: gridColumnStart,
                  gridColumnEnd: gridColumnStart + 1,
                  top: hourOffsetTop,
                }}
              >
                <div
                  className={`
                  flex-grow flex flex-col justify-between items-start text-sm rounded-md shadow-md px-2 py-1 cursor-pointer border
                  ${
                    appointment.status === 0
                      ? 'border-red-300 bg-red-50 hover:bg-red-100'
                      : isBefore
                        ? 'border-green-300 bg-green-50 hover:bg-green-100'
                        : 'border-yellow-300 bg-yellow-50 hover:bg-yellow-100'
                  }
                `}
                >
                  <div className="flex flex-col justify-start items-start">
                    <p className="font-semibold">{appointment.patient}</p>
                    <p className="text-gray-500">{appointment.reason}</p>
                  </div>

                  <p className="text-gray-500">
                    {appointment.eta.getHours()}:{appointment.eta.getMinutes()} - {appointment.eta.getHours() + 1}:
                    {appointment.eta.getMinutes()}
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
              {hoveredHour.toString().padStart(2, '0')}:{hoveredMinutes.toString().padStart(2, '0')}
            </span>
            <hr className="w-full border-dashed border-accent border-t" />
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
