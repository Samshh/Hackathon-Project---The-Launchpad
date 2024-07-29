export type PatientInfo = {
    status: number;
    data:   Data;
}

export type Data = {
    patientId:     number;
    patientName:   string;
    email:         string;
    sex:           string;
    age:           number;
    contact:       string;
    date:          Date;
    appointments:  Appointment[];
    prescriptions: string[];
    mydoctors:     Mydoctor[];
}

export type Appointment = {
    appointmentId: number;
    date:          Date;
    prescription:  string;
    diagnosis:     string;
    status:        boolean;
    prescriptions: string;
    notes:         null;
    doctor:        Doctor;
}

// export type Doctor = {
//     doctorId:       number;
//     doctorName:     string;
//     specialization: string;
//     contact:        string;
// }

export type Mydoctor = {
    doctorId:       number;
    name:           string;
    specialization: string;
}

type Schedule = {
    scheduleId: string,
    day: number,
    startTime: string,
    endTime: string
}


export type Doctor = {
    doctorId: string,
    doctorName: string,
    address: string,
    specialization:string,
    contact: string,
    email: string,
    schedules: Schedule[]
}

export type AllDoctorsResponse = {
    status: number,
    doctors: Doctor[]
}


export type DoctorInfo = {
    status: number;
    data:   DoctorData;
}

export type DoctorData = {
    doctorId:       number;
    name:           string;
    address:        string;
    contact:        string;
    email:          string;
    specialization: string;
}

