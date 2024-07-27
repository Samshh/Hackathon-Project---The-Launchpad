import { Appointment } from "Database/entities/appointment";
import { Response, Request } from 'express';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';
import njwt from 'njwt';
import { format } from 'date-fns';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export default class AppointmentsController {
    static async getAppointments(request: Request, response: Response) {
        const authHeader = request.header('Authorization');
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return response.status(401).json({
                status: 0,
                message: "No token provided",
            });
        }

        let decodedToken;
        try {
            // Decode the token without verification
            decodedToken = njwt.verify(token, JWT_SECRET);
            console.log(decodedToken);
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
            const appointments = await Appointment.findOne({
                where: { doctor: { DoctorID: parsedDoctorID } },
                select: ['AppointmentID', 'ETA', 'patient', 'Reason' ], // Specify the fields you want to include
                relations: ['doctor', 'patient'], // Ensure the doctor relation is loaded
            });
            if (appointments) {
                const result = {
                    id: appointments.AppointmentID,
                    PatientID: appointments.patient.PatientID,
                    patient: appointments.patient.Fname + ' ' + appointments.patient.Lname,
                    reason : appointments.Reason,
                    eta: appointments.ETA,
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
            const formattedETA = format(new Date(ETA), 'yyyy-MM-dd-HH-mm');
            const etaDate = new Date(formattedETA);
            
            const appointment = new Appointment();
            appointment.doctor = doctor;
            appointment.patient = patient;
            appointment.ETA = etaDate;
            appointment.Note = Note;
            appointment.Status = false;
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
