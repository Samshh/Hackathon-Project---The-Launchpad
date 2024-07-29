import { Appointment } from "Database/entities/appointment";
import { Response, Request } from 'express';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';
import njwt from 'njwt';
import { format } from 'date-fns';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export default class AppointmentsController {
    static async getAppointments(request: Request, response: Response) {
        const token = request.cookies.token;

        if (!token) {
            return response.status(401).json({
                status: 0,
                message: "No token provided",
            });
        }

        let decodedToken;
        try {
            decodedToken = njwt.verify(token, JWT_SECRET);
        } catch (error) {
            return response.status(401).json({
                status: 0,
                message: "Invalid token",
            });
        }

        // Extract ID from the decoded token
        const DoctorID = decodedToken.body.id;
        const parsedDoctorID = parseInt(DoctorID, 10);
        if (isNaN(parsedDoctorID)) {
            return response.status(400).json({
                status: 0,
                message: "Invalid DoctorID",
                DoctorID: DoctorID,
                parsedDoctorID: parsedDoctorID,
            });
        }

        try {
            const appointments = await Appointment.find({
                where: { doctor: { DoctorID: parsedDoctorID } },
                select: ['AppointmentID', 'ETA', 'patient', 'Reason' ], 
                relations: ['doctor', 'patient'], 
            });

            if (appointments && appointments.length > 0) {
                const result = appointments.map(appointment => ({
                    appointmentId: appointment.AppointmentID,
                    patientId: appointment.patient.PatientID,
                    patientName: appointment.patient.Fname + ' ' + appointment.patient.Lname,
                    reason: appointment.Reason,
                    eta: appointment.ETA,
                    status: appointment.Status ? 1 : 0,
                }));
                return response.json({
                    status: 1,
                    data: result,
                });
            }else{
                return response.json({
                    status: 0,
                    message: 'No appointment found.',
                });
            }

        } catch (error: any) {
            response.status(400);
            return response.json({
                status: 0,
                message: error.message,
            });
        }
        
    }

    static async mypatientlist(request: Request, response: Response) {
        const token = request.cookies.token;
        if (!token) {
            return response.status(401).json({
                status: 0,
                message: "No token provided",
            });
        }

        let decodedToken;
        try {
            decodedToken = njwt.verify(token, JWT_SECRET);
        } catch (error) {
            return response.status(401).json({
                status: 0,
                message: "Invalid token",
            });
        }

        const doctorId = decodedToken.body.id;
        const parsedDoctorId = parseInt(doctorId, 10);

        if (isNaN(parsedDoctorId)) {
            return response.status(400).json({
                status: 0,
                message: "Invalid DoctorID",
                doctorId: doctorId,
                parsedDoctorId: parsedDoctorId,
            });
        }
        
        try {
            const patients = await Patient.find({
                where: { appointments: { doctor: { DoctorID: parsedDoctorId } } }, 
                select: ['PatientID', 'Fname', 'Lname', 'Sex', 'BirthDate', 'Contact'],
                relations: ['appointments', 'appointments.doctor'], 
            });

            const result = patients.map(patient => {
                const birthDate = new Date(patient.BirthDate);
                const now = new Date();
                const age = now.getFullYear() - birthDate.getFullYear();

                const latestAppointment = patient.appointments
                    .sort((a, b) => new Date(b.ETA).getTime() - new Date(a.ETA).getTime())
                    .slice(0, 1)[0];

                return {
                    patientId: patient.PatientID,
                    name: patient.Fname + ' ' + patient.Lname,
                    sex: patient.Sex,
                    birthDate: patient.BirthDate,
                    contact: patient.Contact,
                    age: age,
                    date: latestAppointment.ETA, 
                };
            });

            return response.json({
                status: 1,
                data: result,
            });
        } catch (error: any) {
            return response.status(400).json({
                status: 0,
                message: error.message,
            });
        }
    }

    static async patientCreateAppointment(request: Request, response: Response) {
        const { DoctorID, PatientID, ETA, Note, Reason, Prescription, Diagnosis } = request.body;
        const parsedDoctorID = parseInt(DoctorID, 10);
        const parsedPatientID = parseInt(PatientID, 10);
        try {
            const doctor = await Doctor.findOne({
                where: { DoctorID: parsedDoctorID },
            });
            if (!doctor) {
                response.status(404);
                return response.json({
                    status: 0,
                    message: 'Doctor not found.',
                });
            }
            const patient = await Patient.findOne({
                where: { PatientID: parsedPatientID },
            });
            if (!patient) {
                response.status(404);
                return response.json({
                    status: 0,
                    message: 'Patient not found.',
                });
            }

            
            const appointment = new Appointment();
            appointment.doctor = doctor;
            appointment.patient = patient;
            appointment.ETA = ETA;
            appointment.Note = Note;
            appointment.Status = true;
            appointment.Reason = Reason;
            appointment.Prescription = Prescription;
            appointment.Diagnosis = Diagnosis;
            appointment.created_at = new Date().getTime();
            appointment.updated_at = new Date().getTime();
            await appointment.save();
            return response.json({
                status: 1,
                data: appointment,
            });
        } catch (error: any) {
            response.status(400);
            return response.json({
                status: 0,
                message: error.message,
            });
        }
    }
}
