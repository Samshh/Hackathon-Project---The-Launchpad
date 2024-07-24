import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { pastAppointmentsMockData } from './pastAppointmentsMockData';
import { DashboardDataTable } from './DashboardTable';
import { pastAppointmentsColumns } from './pastAppointmentsColumns';

export default function PastAppointmentsSection() {
  return (
    <section className={`bg-white col-span-5 rounded-xl p-5 gap-3 flex flex-col`}>
      <header className="flex items-center justify-between">
        <p className="text-xl font-bold">Past Appointments</p>
        <button className='flex items-center gap-3 px-4 py-2 border rounded-full hover:bg-accent hover:text-white border-accent'>
          <p>See All</p>
          <ChevronRightIcon className='size-5'/>
        </button>
      </header>
      <section className='flex-grow h-1 overflow-y-auto'>
        <DashboardDataTable data={pastAppointmentsMockData} columns={pastAppointmentsColumns}/>
      </section>
    </section>
  );
}