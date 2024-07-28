export interface CalendarAppointment {
  id: number | string;
  eta: Date;
  patientName: string;
  reason: string;
  status: number;
}