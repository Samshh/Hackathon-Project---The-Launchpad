import { DataTable } from '@/components/DataTable';
import { allAppointmentsColumns } from '@/components/patient/appointments/allAppointmentsColumns';
import { appointmentsMockData } from '@/components/patient/appointments/appointmentsMockData';
import { Search } from 'lucide-react';

export default function PatientAppointmentsPage() {
  return (
    <div className="flex flex-col flex-1 gap-4 px-6 pt-4 pb-6 bg-white rounded-lg shadow-md">
      <p className="text-3xl font-bold">Appointments</p>
      <div className='flex items-center w-full gap-4 px-4 py-2 rounded-lg shadow-md'>
        <Search className='size-6 stroke-accent'/>
        <input type="text" placeholder='Search your appointments...' className='w-full px-4 py-3 rounded-md'/>
      </div>
      <div className="flex-grow h-1 overflow-y-auto">
        <DataTable columns={allAppointmentsColumns} data={appointmentsMockData} type='patientAppointment'/>
      </div>
    </div>
  );
}
