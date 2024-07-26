import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { pastAppointmentsMockData } from './pastAppointmentsMockData';
import { DataTable } from '../../DataTable';
import { pastAppointmentsColumns } from './pastAppointmentsColumns';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useAppointmentsStore } from '../appointments/store';

export default function PastAppointmentsSection() {
  const {toggleOpen} = useAppointmentsStore()
  return (
    <section className={`bg-white col-span-5 rounded-xl p-5 gap-3 flex flex-col shadow-md`}>
      <header className="flex items-center justify-between">
        <p className="text-xl font-bold">Recent Appointments</p>
        <Button 
        onClick={toggleOpen}
        variant={'default'} className="flex items-center gap-3 hover:text-white">
          <p>See All</p>
          <ChevronRight className="size-4" /> 
        </Button>
      </header>
      <section className='flex-grow h-1 overflow-y-auto'>
        <DataTable data={pastAppointmentsMockData} columns={pastAppointmentsColumns}/>
      </section>
    </section>
  );
}