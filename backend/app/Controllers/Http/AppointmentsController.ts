import { Appointment } from "Database/entities/appointment";
import { Response, Request } from 'express';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';

export default class AppointmentsController {
    static async getAppointments(request: Request, response: Response) {
        const DoctorID = request.params.DoctorID || request.body.DoctorID;
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
            const appointments = await Appointment.findOne({
                where: { doctor: { DoctorID: parsedDoctorID } },
                select: ['AppointmentID', 'ETA', 'patient'], // Specify the fields you want to include
                relations: ['doctor', 'patient'], // Ensure the doctor relation is loaded
            });
            if (appointments) {
                const result = {
                    AppointmentID: appointments.AppointmentID,
                    PatientID: appointments.patient.PatientID,
                    PatientName: appointments.patient.Fname + ' ' + appointments.patient.Lname,
                    ETA: appointments.ETA,
                };
                return response.json({
                    status: 1,
                    data: result,
                });
            }else{
                response.status(404);
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
    static async patientCreateAppointment(request: Request, response: Response) {
        const { DoctorID, PatientID, ETA, Note } = request.body;
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
            appointment.ETA = new Date(ETA); // change format
            appointment.Note = Note;
            appointment.Status = false;
            appointment.created_at = new Date().getTime();
            
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
