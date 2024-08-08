import { areDatesEqual } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { startOfWeek } from 'date-fns';
import WeeklyCalendarTimeBlockGrid from './WeeklyCalendarTimeBlockGrid';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarAppointment, CalendarFloatingTimeBlock } from './types';

interface WeeklyCalendarProps {
  areDaysDisplayed?: boolean;
  appointments?: CalendarAppointment[];
  floatingTimeBlocks?: CalendarFloatingTimeBlock[];
  onCalendarClick?: (selectedDateTime: Date) => void;
  onFloatingTimeBlockClick?: (selectedTimeBlock: any) => void;
}

const daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function WeeklyCalendar({
  areDaysDisplayed = false,
  appointments,
  floatingTimeBlocks,
  onCalendarClick,
  onFloatingTimeBlockClick,
}: WeeklyCalendarProps) {
  const [activeWeekFirstDay, setActiveWeekFirstDay] = useState<Date>(startOfWeek(new Date()));

  const activeWeekDays = useMemo(() => {
    const firstDay = activeWeekFirstDay;
    const days = [firstDay];

    for (let i = 1; i < 7; i++) {
      const nextDay = new Date(firstDay);
      nextDay.setDate(nextDay.getDate() + i);
      days.push(nextDay);
    }

    return days;
  }, [activeWeekFirstDay]);

  const activeMonthYearText = useMemo(() => {
    const firstDay = activeWeekFirstDay;

    const lastDay = new Date(firstDay);
    lastDay.setDate(lastDay.getDate() + 6);

    const firstMonth = firstDay.toLocaleString('en-US', { month: 'long' });
    const lastMonth = lastDay.toLocaleString('en-US', { month: 'long' });

    const firstYear = firstDay.getFullYear();
    const lastYear = lastDay.getFullYear();

    return `${firstMonth}${firstMonth === lastMonth ? '' : `${firstYear === lastYear ? '' : `${firstYear}`} - ${lastMonth}`} ${lastYear}`;
  }, [activeWeekFirstDay]);

  const goToPreviousWeek = () => {
    const newActiveWeekFirstDay = new Date(activeWeekFirstDay);
    newActiveWeekFirstDay.setDate(newActiveWeekFirstDay.getDate() - 7);
    setActiveWeekFirstDay(newActiveWeekFirstDay);
  };

  const goToNextWeek = () => {
    const newActiveWeekFirstDay = new Date(activeWeekFirstDay);
    newActiveWeekFirstDay.setDate(newActiveWeekFirstDay.getDate() + 7);
    setActiveWeekFirstDay(newActiveWeekFirstDay);
  };

  return (
    <div className="flex-grow w-full flex flex-col justify-start items-stretch bg-white rounded-md shadow-md overflow-hidden">
      {areDaysDisplayed && (
        <div className="flex flex-row justify-between items-center border-b p-4 border-gray-200">
          <div className="flex flex-row justify-start items-center gap-4">
            <div className="flex flex-row justify-start items-center gap-2">
              <Button variant="outline" size="icon" onClick={goToPreviousWeek}>
                <ChevronLeft size={16} stroke={"black"} />
              </Button>

              <Button variant="outline" size="icon" onClick={goToNextWeek}>
                <ChevronRight size={16} stroke={"black"} />
              </Button>
            </div>

            <p className="text-xl text-black font-semibold">{activeMonthYearText}</p>
          </div>
        </div>
      )}

      <div className="flex-grow flex flex-col justify-start items-stretch select-none border-b border-gray-200 overflow-hidden">
        <div className="min-h-16 flex flex-row justify-start items-stretch border-b border-gray-200 shadow-sm">
          <div className="w-20 flex justify-center items-center border-r border-gray-200">
            <p className="text-xs font-semibold text-gray-400">GMT-8</p>
          </div>

          {activeWeekDays.map((day, index) => (
            <div key={index} className="flex-grow flex flex-col justify-center items-center">
              <p className="text-xs font-semibold text-gray-400">{daysOfTheWeek[index]}</p>
              {areDaysDisplayed && (
                <p
                  className={`py-0.5 px-1.5 ${areDatesEqual(day, new Date()) ? 'rounded-full bg-accent text-white' : 'text-gray-600'}`}
                >
                  {day.getDate()}
                </p>
              )}
            </div>
          ))}
        </div>

        <WeeklyCalendarTimeBlockGrid
          activeWeekFirstDay={activeWeekFirstDay}
          appointments={appointments}
          onCalendarClick={onCalendarClick}
          floatingTimeBlocks={floatingTimeBlocks}
          onFloatingTimeBlockClick={onFloatingTimeBlockClick}
        />
      </div>
    </div>
  );
}
