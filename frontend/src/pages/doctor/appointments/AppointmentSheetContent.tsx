import DoctorDetailItem from "@/components/doctor/DoctorDetailItem";
import { DoctorAppointment } from "./types";
import { format, isBefore } from "date-fns";

interface AppointmentSheetProps {
  appointmentId: number;
}

// TODO: Fetch appointment data from API

const appointment: DoctorAppointment = {
  appointmentId: 1,
  patientName: "Juan dela Cruz",
  eta: "2024-07-30T18:45:00",
  reason: "Checkup",
  status: 1,
}

export default function AppointmentSheetContent({
  appointmentId
}: AppointmentSheetProps) {
  // TODO: React query here

  return (
    <div className="flex flex-col h-full gap-8">
      <p className="text-3xl font-bold">Appointment</p>
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-col justify-start font-medium">
          <p className="text-gray-500">Patient</p>
          <p className="text-xl font-semibold">{appointment.patientName}</p>
        </div>

        <div className="flex flex-col justify-start font-medium text-gray-500">
          <p className="text-gray-500">Date</p>
          <p className="text-xl font-semibold">{format(new Date(appointment.eta), "Pp")}</p>
        </div>

        <div className="flex flex-col justify-start font-medium text-gray-500">
          <p className="text-gray-500">Status</p>
          {appointment.status === 1 ? (
            isBefore(new Date(appointment.eta), new Date()) ? (
              <p className={`text-xl font-semibold text-orange-500`}>Pending</p>
            ) : (
              <p className={`text-xl font-semibold text-green-500`}>Finished</p>
            )
          ) : (
            <p className={`text-xl font-semibold text-red-500`}>Cancelled</p>
          )}          
        </div>

        {appointment.note && (
          <div className="flex flex-col justify-start font-medium">
            <p className="text-gray-500">Patient</p>
            <p className="text-xl font-semibold">{appointment.note}</p>
          </div>          
        )}

        {appointment.diagnosis && (
          <div className="flex flex-col justify-start font-medium">
            <p className="text-gray-500">Patient</p>
            <p className="text-xl font-semibold">{appointment.diagnosis}</p>
          </div>          
        )}

        {appointment.prescription && (
          <div className="flex flex-col justify-start font-medium">
            <p className="text-gray-500">Patient</p>
            <p className="text-xl font-semibold">{appointment.prescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}