export interface CalendarAppointment {
  id: number | string;
  eta: Date;
  patientName: string;
  reason: string;
  status: number;
}

export interface CalendarFloatingTimeBlock {
  id: number;
  className?: string;
  startTime: Date;
  endTime?: Date;
  dayOfTheWeek?: number;
}