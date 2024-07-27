import { DataTable } from '@/components/DataTable';
import { allAppointmentsColumns } from '@/components/patient/appointments/allAppointmentsColumns';
import { appointmentsMockData } from '@/components/patient/appointments/appointmentsMockData';

export default function PatientAppointmentsPage() {
  return (
    <div className="flex flex-col flex-1 gap-4 px-6 pt-4 pb-6 bg-white rounded-lg shadow-md">
      <p className="text-3xl font-bold">Your Appointments</p>
      <div className="flex-grow h-1 overflow-y-auto">
        <DataTable columns={allAppointmentsColumns} data={appointmentsMockData} type='patientAppointment'/>
      </div>
    </div>
  );
}
