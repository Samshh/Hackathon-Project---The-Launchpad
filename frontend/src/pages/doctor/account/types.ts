export interface PlannedAbsenceInput {
  startDate: Date;
  endDate: Date;
}

export interface PlannedAbsence extends PlannedAbsenceInput {
  id: number | string;
  doctorId: number | string;
}