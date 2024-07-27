import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import AppointmentCalendar from "./AppointmentCalendar";
import useAppointmentsStore from "./store";

type AppointmentViewType = 'calendar' | 'list';

export default function DoctorAppointmentsPage() {
  const [viewType, setViewType] = useState<AppointmentViewType>('calendar');
  const resetStore = useAppointmentsStore(state => state.reset);

  useEffect(() => {
    resetStore();
  }, []);

  return (
    <main className="h-full min-h-[480px] flex-grow flex flex-col justify-start items-stretch gap-4 pt-4">
      <div className="flex flex-row justify-between items-center">
        <h5>Appointments</h5>

        <Select value={viewType} onValueChange={(value: AppointmentViewType) => setViewType(value)}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='calendar'>Calendar</SelectItem>
            <SelectItem value='list'>List</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {viewType === 'calendar' ? (
        <AppointmentCalendar />
      ) : null}
    </main>
  )
}