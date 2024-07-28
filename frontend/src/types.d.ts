interface Appointment {
  appointmentId: number;
  patientId: number;
  doctorId: number;
  patientName: string;
  eta: string;
  reason?: string;
  status: 0 | 1;
}