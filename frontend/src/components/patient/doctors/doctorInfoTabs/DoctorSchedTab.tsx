import WeeklyCalendar from '@/components/WeeklyCalendar/index';
import { CalendarFloatingTimeBlock } from '@/components/WeeklyCalendar/types';

const doctorSchedTimeBlocks: CalendarFloatingTimeBlock[] = [
  {
    id: '1',
    startTime: new Date(2024, 6, 28, 12, 30, 0),
    endTime: new Date(2024, 6, 28, 13, 30, 0),
    dayOfTheWeek: 1,
    className: 'bg-yellow-100 text-black flex gap-2 text-lg font-medium border border-yellow-200',
  },
  {
    id: '2',
    startTime: new Date(2024, 6, 28, 13, 30, 0),
    endTime: new Date(2024, 6, 28, 14, 30, 0),
    dayOfTheWeek: 1,
    className: 'bg-yellow-100 text-black flex gap-2 text-lg font-medium border border-yellow-200',
  },
  {
    id: '3',
    startTime: new Date(2024, 6, 28, 15, 30, 0),
    endTime: new Date(2024, 6, 28, 16, 30, 0),
    dayOfTheWeek: 3,
    className: 'bg-yellow-100 text-black flex gap-2 text-lg font-medium border border-yellow-200',
  },
  {
    id: '4',
    startTime: new Date(2024, 6, 28, 16, 30, 0),
    endTime: new Date(2024, 6, 28, 17, 30, 0),
    dayOfTheWeek: 4,
    className: 'bg-yellow-100 text-black flex gap-2 text-lg font-medium border border-yellow-200',
  },
  {
    id: '5',
    startTime: new Date(2024, 6, 28, 16, 30, 0),
    endTime: new Date(2024, 6, 28, 17, 30, 0),
    dayOfTheWeek: 5,
    className: 'bg-yellow-100 text-black flex gap-2 text-lg font-medium border border-yellow-200',
  },
];

export default function DoctorSchedTab() {
  return (
    <div className="flex-grow flex flex-col items-stretch text-white">
      <WeeklyCalendar
        floatingTimeBlocks={doctorSchedTimeBlocks}
        startTimeAndEndTimeSeparator={<div className="h-[2px] w-2 bg-black"></div>}
      />
    </div>
  );
}
