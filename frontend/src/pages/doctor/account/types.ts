export interface PlannedAbsenceInput {
  startDate: Date;
  endDate: Date;
}

export interface PlannedAbsence extends PlannedAbsenceInput {
  id: number | string;
  doctorId: number | string;
}

export interface AvailabilityInput {
  selectedDateTime: Date;
  availabilityId?: number;
}

export interface AvailabilityResponseData {
  availabilityId: number;
  day: number;
  startTime: string;
  endTime: string;
}

export interface Availability {
  availabilityId: number;
  day: number;
  startTime: Date;
  endTime: Date;
}