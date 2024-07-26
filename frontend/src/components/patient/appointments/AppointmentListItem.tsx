import { useEffect } from 'react';
import { PastAppointment } from './allAppointmentsColumns';
import { useGlobalSheetStore } from '@/components/store';

type AppointmenListItemProps = {
  appointment: PastAppointment;
};

export default function AppointmentListItem({ appointment }: AppointmenListItemProps) {

  const {isOpen} = useGlobalSheetStore()

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen])

  return (
    <div className="flex flex-col h-full gap-8">
      <p className="text-3xl font-bold">Appointment</p>
      <div className="flex flex-col flex-1 gap-4">
        <div className="grid grid-cols-2 size-full">
          <div className="flex flex-col justify-start font-medium text-gray-500">Doctor</div>
          <p className="text-xl font-semibold">{appointment.doctor.name}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Specialization</div>
          <p className="text-xl font-semibold">{appointment.doctor.specialization}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Status</div>
          <p className={`text-xl font-semibold ${appointment.status === 0 ? 'text-red-500 ' : 'text-green-500'}`}>
            {appointment.status === 0 ? 'Cancelled' : 'Finished'}
          </p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Date</div>
          <p className="text-xl font-semibold">{appointment.ETA.split("-").slice(0,3).join("-")}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Estimated Time of Arrival</div>
          <p className="text-xl font-semibold">{appointment.ETA.split("-").slice(3).join(":")}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Note to doctor</div>
          <p className="text-xl break-words w-[350px]">{appointment.note}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Diagnosis</div>
          <p className="text-xl break-words w-[350px]">{appointment.diagnosis}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Prescription</div>
          <p className="text-xl break-words w-[350px]">{appointment.prescription}</p>
        </div>
      </div>
    </div>
  );
}
