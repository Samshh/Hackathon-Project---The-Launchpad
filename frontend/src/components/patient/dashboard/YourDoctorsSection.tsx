import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { DashboardDataTable } from './DashboardTable';
import { yourDoctorsColumns } from './yourDoctorsColumns';
import { yourDoctorsMockData } from './yourDoctorsMockData';

export default function YourDoctorsSection() {
  return (
    <section className={`bg-white col-span-5 gap-3 rounded-xl p-5 flex flex-col overflow-hidden`}>
      <header className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Doctors</p>
        <button className="flex items-center gap-3 px-4 py-2 border rounded-full hover:bg-accent hover:text-white border-accent">
          <p>See All</p>
          <ChevronRightIcon className="size-5" />
        </button>
      </header>
      <section className="flex-grow h-1 overflow-y-auto">
        <DashboardDataTable data={yourDoctorsMockData} columns={yourDoctorsColumns} />
      </section>
    </section>
  );
}
