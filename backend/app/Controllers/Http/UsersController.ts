import DoctorRegisterValidator from 'App/Validators/DoctorRegisterValidator';
import PatientRegisterValidator from 'App/Validators/PatientRegisterValidator';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';
import { Response, Request } from 'express';
import njwt from 'njwt';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret
const oauth2Scheme = (req: Request) => {
  const token = req.cookies['token'];
  return token;
};
export default class UsersController {
  static async authenticate(request: Request, response: Response) {
    const token = oauth2Scheme(request);
    if (token) {
      return response.json({
        status: 200,
        message: 'Authenticated',
      });
    } else {
      return response.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    }
  }

  /*
  |--------------------------------------------------------------------------
  | CREATE NEW USER
  |--------------------------------------------------------------------------
  */

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
    const { Fname, Lname, BirthDate, Sex, Email, Contact, Password } = request.body;

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

      await Patient.save(userData);

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

      const claims = { id: user.DoctorID, Email: user.Email };
      const token = njwt.create(claims, JWT_SECRET);
      token.setExpiration(new Date().getTime() + 60 * 60 * 1000);
      const jwt = token.compact();

      response.cookie('token', jwt, {
        httpOnly: true,
        secure: false,
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

      const claims = { id: user.PatientID, Email: user.Email };
      const token = njwt.create(claims, JWT_SECRET);
      token.setExpiration(new Date().getTime() + 60 * 60 * 1000);
      const jwt = token.compact();

      response.cookie('token', jwt, {
        httpOnly: true,
        secure: false,
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

  /*
  |--------------------------------------------------------------------------
  | READ USER
  |--------------------------------------------------------------------------
  */

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
      const users = await Patient.find();

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
      const { PatientID } = request.params;
      const parsedPatientID = parseInt(PatientID, 10);

      const user = await Patient.findOne({
        where: [{ PatientID: parsedPatientID }],
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

  /*
|--------------------------------------------------------------------------
| UPDATE USER
|--------------------------------------------------------------------------
*/
}
