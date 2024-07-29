import DoctorRegisterValidator from 'App/Validators/DoctorRegisterValidator';
import PatientRegisterValidator from 'App/Validators/PatientRegisterValidator';
import { Appointment } from "Database/entities/appointment";
import { Patient_Records } from 'Database/entities/patient_record';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';
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
      console.log(Documents)
      console.log(newPatient);
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
      const users = await Doctor.find();

      return response.json({
        status: 1,
        data: users,
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
  static async get_doctor_by_id(request: Request, response: Response) {
    try {
      const { DoctorID } = request.params;
      const parsedDoctorID = parseInt(DoctorID, 10); // Convert DoctorID to a number

      const user = await Doctor.findOne({
        where: [{ DoctorID: parsedDoctorID }], // Use parsedDoctorID instead of DoctorID
      });

      if (!user) {
        response.status(404);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }

      return response.json({
        status: 1,
        data: user,
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
        relations: ['appointments'],
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

      const result = {
        patientId: patient.PatientID,
        patientName: patient.Fname + ' ' + patient.Lname,
        email: patient.Email,
        sex: patient.Sex,
        age: age,
        contact: patient.Contact,
        date: latestAppointment.ETA,
        appointments: patient.appointments
          .filter(appointment => appointment.Status == false)
          .sort((a, b) => b.AppointmentID - a.AppointmentID)
          .map(appointment => ({
            appointmentId: appointment.AppointmentID,
            date: appointment.ETA,
            prescription: appointment.Prescription,
            diagnosis: appointment.Diagnosis,
            status: appointment.Status,
          })),
        prescriptions: patient.appointments
          .filter(appointment => appointment.Status == false)
          .sort((a, b) => b.AppointmentID - a.AppointmentID)
          .map(appointment => appointment.Prescription),
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
