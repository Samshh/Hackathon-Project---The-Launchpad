export interface DoctorPatientItemResponseData {
  patientId: number;
  name: string;
  age: number;
  contactNumber: string;
  date: string;
  sex: string;
}

export interface DoctorPatientItem {
  patientId: number;
  name: string;
  age: number;
  contactNumber: string;
  date: Date;
  sex: string;
}

export interface DoctorPatientAppointment {
  appointmentId: number;
  date: string;
  status: 0 | 1;
}

export interface DoctorPatient {
  patientId: number;
  patientName: string;
  sex: string;
  age: number;
  contact: string;
  appointments: DoctorPatientAppointment[];
  prescriptions: string[];
  date: Date;
  email: string;
}