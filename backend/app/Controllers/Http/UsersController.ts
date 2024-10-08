import DoctorRegisterValidator from 'App/Validators/DoctorRegisterValidator';
import PatientRegisterValidator from 'App/Validators/PatientRegisterValidator';
import { Appointment } from "Database/entities/appointment";
import { Patient_Records } from 'Database/entities/patient_record';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';
import { Doctor_Schedule } from 'Database/entities/doctor_schedule';
import { Response, Request } from 'express';
import njwt from 'njwt';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export default class UsersController {
  static async authenticate(request: Request, response: Response) {

    const token = request.cookies.token;

    if (!token) {
      return response.status(401).json({
        status: 0,
        message: 'Unauthorized',
      });
    }

    njwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
      if (err) {
        return response.status(401).json({
          status: 0,
          message: 'oten dako',
        });

      } else {
        return response.json({
          status: 1,
          message: 'Authenticated',
          user: verifiedJwt.body,
        });
      }
    });
  }

  static async logout(request: Request, response: Response) {
    response.cookie('token', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(0), 
    });
  }

  static async docRegister(request: Request, response: Response) {
    const { Fname, Lname, Address, Specialization, Sex, Email, Contact, Password } = request.body;

    const userData: Partial<Doctor> = {
      Fname,
      Lname,
      Address,
      Specialization,
      Sex,
      Email,
      Contact,
      Password,
      created_at: Date.now(),
      updated_at: Date.now(),
    };

    const { data, success, error } = DoctorRegisterValidator.validate(userData);

    if (!success) {
      return response.status(400).json({
        status: 0,
        message: error,
      });
    }

    try {
      const isUserExists = await Doctor.findOne({ where: { Email } });

      if (isUserExists) {
        return response.status(400).json({
          status: 0,
          message: 'Email already taken.',
        });
      }

      await Doctor.save(userData);

      return response.status(201).json({
        status: 1,
        message: 'Registration success!',
      });
    } catch (error: any) {
      return response.status(500).json({
        status: 0,
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  }
  static async patRegister(request: Request, response: Response) {
    const { Fname, Lname, BirthDate, Sex, Email, Contact, Password, Documents } = request.body;

    const userData: Partial<Patient> = {
      Fname,
      Lname,
      Sex,
      Email,
      Contact,
      BirthDate,
      Password,
      created_at: Date.now(),
      updated_at: Date.now(),
    };

    const { data, success, error } = PatientRegisterValidator.validate(userData);

    if (!success) {
      return response.status(400).json({
        status: 0,
        message: error,
      });
    }

    try {
      const isUserExists = await Patient.findOne({ where: { Email } });

      if (isUserExists) {
        return response.status(400).json({
          status: 0,
          message: 'Email already taken.',
        });
      }

      const newPatient = await Patient.save(userData);

      if (Documents && typeof Documents === 'string') {
        const record = {
          FilePath: Documents,
          patient: newPatient,
        };
        console.log(record);
        await Patient_Records.save([{ ...record }]);
      }

      return response.status(201).json({
        status: 1,
        message: 'Registration success!',
      });
    } catch (error: any) {
      return response.status(500).json({
        status: 0,
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  }
  // LOGIN
  static async doctorlogin(request: Request, response: Response) {
    try {
      const { Email, Password } = request.body;

      const user = await Doctor.findOne({
        where: [{ Email }],
      });

      if (!user) {
        response.status(404);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }

      if (user.Password !== Password) {
        return response.status(401).json({
          status: 0,
          message: 'Invalid password.',
        });
      }

      const claims = { TypeIs: 1, id: user.DoctorID, Email: user.Email };
      const token = njwt.create(claims, JWT_SECRET);
      token.setExpiration(new Date().getTime() + 60 * 60 * 1000);
      const jwt = token.compact();

      response.cookie('token', jwt, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });

      return response.json({
        status: 1,
        data: {
          user,
          token: jwt,
        },
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }
  static async patientlogin(request: Request, response: Response) {
    try {
      const { Email, Password } = request.body;

      const user = await Patient.findOne({
        where: [{ Email }],
      });

      if (!user) {
        response.status(404);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }

      if (user.Password !== Password) {
        return response.status(401).json({
          status: 0,
          message: 'Invalid password.',
        });
      }

      const claims = { TypeIs: 2, id: user.PatientID, Email: user.Email };
      const token = njwt.create(claims, JWT_SECRET);
      token.setExpiration(new Date().getTime() + 60 * 60 * 1000);
      const jwt = token.compact();

      response.cookie('token', jwt, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });

      return response.json({
        status: 1,
        data: {
          user,
          token: jwt,
        },
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }


  static async get_all_doctors(request: Request, response: Response) {
    try {
      const users = await Doctor.find({
        select: ['DoctorID', 'Fname', 'Lname', 'Address', 'Specialization', 'Contact', 'Email'],
        relations: ['schedule'],
      });

      const result = users.map(user => ({
        doctorId: user.DoctorID,
        doctorName: user.Fname + ' ' + user.Lname,
        address: user.Address,
        specialization: user.Specialization,
        contact: user.Contact,
        email: user.Email,
        schedules: user.schedule.map(schedule => ({
          scheduleId: schedule.id,
          day: schedule.day,
          startTime: schedule.starttime,
          endTime: schedule.endtime
        }))
      }));

      return response.json({
        status: 1,
        doctors: result,
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }
  static async get_all_patients(request: Request, response: Response) {
    try {
      // get the most latest appointment of each patient
      const patients = await Patient.find({
        select: ['PatientID', 'Fname', 'Lname', 'Sex', 'BirthDate', 'Contact'],
        relations: ['appointments'],
      });

      const result = patients.map(patient => {
        const birthDate = new Date(patient.BirthDate);
        const now = new Date();
        const age = now.getFullYear() - birthDate.getFullYear();

        return {
          PatientID: patient.PatientID,
          PatientName: patient.Fname + ' ' + patient.Lname,
          Email: patient.Email,
          Sex: patient.Sex,
          Birthdate: patient.BirthDate,
          Age: age, // Calculate age dynamically
          Contact: patient.Contact,
          Appointments: patient.appointments
            .filter(appointment => appointment.Status == false)
            .sort((a, b) => b.AppointmentID - a.AppointmentID)
            .map(appointment => ({
              AppointmentID: appointment.AppointmentID,
              Date: appointment.ETA,
              Status: appointment.Status,
            }))
        };
      });

      return response.json({
        status: 1,
        data: result,
      });
    } catch (error: any) {
      response.status(400).json({
        status: 0,
        message: error.message,
      });
    }
  }

  // include schedule
  static async get_doctor_by_id(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const user = await Doctor.findOne({
        where: [{ DoctorID: id } ],
        relations: ['schedule'], // Use parsedDoctorID instead of DoctorID
      });

      if (!user) {
        response.status(404);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }
      
      const doctorinfo = {
        doctorId: user.DoctorID,
        name: `${user.Fname} ${user.Lname}`,
        address: user.Address,
        contact: user.Contact,
        email: user.Email,
        specialization: user.Specialization,
        schedules: user.schedule.map(schedule => ({
          scheduleId: schedule.id,
          day: schedule.day,
          startTime: schedule.starttime,
          endTime: schedule.endtime
        }))
      };
      return response.json({
        status: 1,
        data: doctorinfo,
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }
  static async get_patient_by_id(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const patient = await Patient.findOne({
        where: { PatientID: id },
        select: ['PatientID', 'Fname', 'Lname', 'Sex', 'BirthDate', 'Contact', 'Email'],
        relations: ['appointments', 'appointments.doctor'],
      });

      if (!patient) {
        response.status(404);
        return response.json({
          status: 0,
          message: 'Patient not found.',
        });
      }

      const birthDate = new Date(patient.BirthDate);
      const now = new Date();
      const age = now.getFullYear() - birthDate.getFullYear();

      const latestAppointment = patient.appointments
        .sort((a, b) => new Date(b.ETA).getTime() - new Date(a.ETA).getTime())
        .slice(0, 1)[0];

      const uniqueDoctors = Array.from(new Set(
        patient.appointments
          .filter(appointment => appointment.doctor)
          .map(appointment => JSON.stringify({
            doctorId: appointment.doctor.DoctorID,
            name: appointment.doctor.Fname + ' ' + appointment.doctor.Lname,
            specialization: appointment.doctor.Specialization
          }))
      )).map(doctor => JSON.parse(doctor));

      const result = {
        patientId: patient.PatientID,
        patientName: patient.Fname + ' ' + patient.Lname,
        email: patient.Email,
        sex: patient.Sex,
        age: age,
        contact: patient.Contact,
        date: latestAppointment.ETA,
        appointments: patient.appointments
          .sort((a, b) => b.AppointmentID - a.AppointmentID)
          .map(appointment => ({
            appointmentId: appointment.AppointmentID,
            date: appointment.ETA,
            prescription: appointment.Prescription,
            diagnosis: appointment.Diagnosis,
            status: appointment.Status,
            prescriptions: appointment.Prescription,
            notes: appointment.Note,
            doctor: {
              doctorId: appointment.doctor.DoctorID,
              doctorName: appointment.doctor.Fname + ' ' + appointment.doctor.Lname,
              specialization: appointment.doctor.Specialization,
              contact: appointment.doctor.Contact,
            }
          })),
        prescriptions: patient.appointments
          .filter(appointment => appointment.Status == false)
          .sort((a, b) => b.AppointmentID - a.AppointmentID)
          .map(appointment => appointment.Prescription),
        mydoctors: uniqueDoctors 
      };

      return response.json({
        status: 1,
        data: result,
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }

  /*
|--------------------------------------------------------------------------
| UPDATE USER
|--------------------------------------------------------------------------
*/
}
