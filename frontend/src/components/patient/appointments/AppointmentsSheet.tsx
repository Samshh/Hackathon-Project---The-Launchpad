import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useAppointmentsStore } from './store';
import { DataTable } from '../../DataTable';
import { allAppointmentsColumns } from './allAppointmentsColumns';
import { pastAppointmentsMockData } from '../dashboard/pastAppointmentsMockData';
import { Search } from 'lucide-react';

export default function AppointmentsSheet() {
  const { isOpen, toggleOpen } = useAppointmentsStore();
  return (
    <Sheet open={isOpen} onOpenChange={toggleOpen}>
      <SheetContent className="flex flex-col min-w-fit">
        <p className="text-2xl font-bold">Appointments</p>
        <div className="flex items-center w-full gap-3 pl-4 rounded-lg shadow-md">
          <Search className="size-5 stroke-accent" />
          <input type="text" placeholder="Search your appointments..." className="flex-1 h-full px-3 py-3 rounded-md" />
        </div>
        <div className="flex-grow overflow-y-auto">
          <DataTable columns={allAppointmentsColumns} data={pastAppointmentsMockData} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
