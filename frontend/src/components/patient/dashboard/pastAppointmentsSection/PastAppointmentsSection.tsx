import { appointmentsMockData } from '../../appointments/appointmentsMockData';
import { DataTable } from '@/components/DataTable';
import { pastAppointmentsColumns } from './pastAppointmentsColumns';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sortAppointments } from '@/lib/utils';
import { parseISO } from 'date-fns';

export default function PastAppointmentsSection() {
  console.log(sortAppointments(appointmentsMockData, false));
  return (
    <section className={`bg-white col-span-5 rounded-xl p-5 gap-3 flex flex-col shadow-md`}>
      <header className="flex items-center justify-between">
        <p className="text-xl font-bold">Recent Appointments</p>
        <Link to={'/patient/appointments'}>
          <Button variant={'default'} className="flex items-center gap-3 hover:text-white">
            <p>See All</p>
            <ChevronRight className="size-4" />
          </Button>
        </Link>
      </header>
      <section className="flex-grow h-1 overflow-y-auto">
        <DataTable
          data={appointmentsMockData.sort((a, b) => {
            // Parse the ETA strings directly to Date objects
            const dateA = parseISO(a.ETA);
            const dateB = parseISO(b.ETA);

            // Compare the dates
            return dateA.getTime() - dateB.getTime();
          })}
          columns={pastAppointmentsColumns}
          type="patientAppointment"
        />
      </section>
    </section>
  );
}
