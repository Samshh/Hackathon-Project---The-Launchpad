export interface CalendarAppointment {
  id: number | string;
  eta: Date;
  patientName: string;
  reason: string;
  status: number;
}

export interface CalendarFloatingTimeBlock {
  id: string;
  className?: string;
  startTime: Date;
  endTime?: Date;
}