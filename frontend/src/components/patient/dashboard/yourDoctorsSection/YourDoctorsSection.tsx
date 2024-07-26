import { DataTable } from '../../../DataTable';
import { yourDoctorsColumns } from './yourDoctorsColumns';
import { yourDoctorsMockData } from './yourDoctorsMockData';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function YourDoctorsSection() {
  return (
    <section className={`bg-white shadow-md col-span-5 gap-3 rounded-xl p-5 flex flex-col overflow-hidden`}>
      <header className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Doctors</p>
        <Button variant={'default'} className="flex items-center gap-3 hover:text-white">
          <p>See All</p>
          <ChevronRight className="size-4" />
        </Button>
      </header>
      <section className="flex-grow h-1 overflow-y-auto shrink-0">
        <DataTable data={yourDoctorsMockData} columns={yourDoctorsColumns} type="doctor" />
      </section>
    </section>
  );
}
