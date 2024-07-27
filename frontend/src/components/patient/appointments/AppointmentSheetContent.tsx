import { PastAppointment } from './allAppointmentsColumns';
import { parse, format } from 'date-fns';
import { isEtaBeforeCurrent } from '@/lib/utils';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import {useEffect} from "react"

type AppointmenListItemProps = {
  appointment: PastAppointment;
};

export default function AppointmentSheetContent({ appointment }: AppointmenListItemProps) {
  const etaDateTime = appointment.ETA;
  const isEtaBeforeCurr = isEtaBeforeCurrent(etaDateTime);
  const parsedDateTime = parse(etaDateTime, 'yyyy-MM-dd-HH-mm', new Date());
  const formattedTime = format(parsedDateTime, 'h:mm a');
  const formattedDate = format(parsedDateTime, 'MMMM d, yyyy');

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
          {appointment.status === 1 ? (
            isEtaBeforeCurr ? (
              <p className={`text-xl font-semibold text-orange-500`}>Pending</p>
            ) : (
              <p className={`text-xl font-semibold text-green-500`}>Finished</p>
            )
          ) : (
            <p className={`text-xl font-semibold text-red-500`}>Cancelled</p>
          )}
          <div className="flex flex-col justify-start font-medium text-gray-500">Date</div>
          <p className="text-xl font-semibold">{formattedDate}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Estimated Time of Arrival</div>
          <p className="text-xl font-semibold">{formattedTime}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Note to doctor</div>
          <p className="text-xl break-words w-[350px]">{appointment.note}</p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Diagnosis</div>
          <p className="text-xl break-words w-[350px]">
            {appointment.status === 1 && !isEtaBeforeCurrent && appointment.diagnosis}
          </p>
          <div className="flex flex-col justify-start font-medium text-gray-500">Prescription</div>
          <p className="text-xl break-words w-[350px]">
            {appointment.status === 1 && !isEtaBeforeCurrent && appointment.prescription}
          </p>
        </div>
      </div>
    </div>
  );
}
