export interface DoctorAppointment {
  appointmentId: number;
  patientName: string,
  eta: string,
  reason: string,
  status: number,
  note?: string,
  diagnosis?: string,
  prescription?: string
}