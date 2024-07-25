import DoctorRegisterValidator from 'App/Validators/DoctorRegisterValidator';
import PatientRegisterValidator from 'App/Validators/PatientRegisterValidator';
import { Doctor } from 'Database/entities/doctor';
import { Patient } from 'Database/entities/patient';
// import { ic } from 'azle';
import { Response, Request } from 'express';
import njwt from 'njwt';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export default class UsersController {

  static async test(request: Request, response: Response) {
    return response.json({
      status: 1,
      message: 'Testing 123 ABC',
    });
  }

  //register doctor function
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

    const { data, success, error } = DoctorRegisterValidator.validate(userData);

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
  // Get all doctors function 
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


      return response.json({
        status: 1,
        data: {
          user,
          token : jwt,
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

  

  // static async update(request: Request, response: Response) {
  //   const { data, success, error } = UserUpdateValidator.validate(request.body);

  //   if (!success) {
  //     response.status(400);
  //     const { path, message } = error.issues?.[0];
  //     return response.json({
  //       status: 0,
  //       message: `${path?.join('.')}: ${message}`,
  //     });
  //   }

  //   const { name, tiktok, instagram, facebook, twitter, website, bio, profile_photo, banner_photo } = data;

  //   try {
  //     const findUser = await User.findOneBy({ principal_id: ic.caller().toText() });

  //     if (!findUser) {
  //       response.status(400);
  //       return response.json({
  //         status: 0,
  //         message: 'User not found!',
  //       });
  //     }

  //     if (bio) {
  //       findUser.bio = bio;
  //     }

  //     if (name) {
  //       findUser.name = name;
  //     }

  //     if (tiktok) {
  //       findUser.tiktok = tiktok;
  //     }

  //     if (twitter) {
  //       findUser.twitter = twitter;
  //     }

  //     if (instagram) {
  //       findUser.instagram = instagram;
  //     }

  //     if (facebook) {
  //       findUser.facebook = facebook;
  //     }

  //     if (website) {
  //       findUser.website = website;
  //     }

  //     if (profile_photo) {
  //       findUser.profile_photo = profile_photo;
  //     }

  //     if (banner_photo) {
  //       findUser.banner_photo = banner_photo;
  //     }

  //     findUser.updated_at = Date.now();

  //     await findUser.save();

  //     return response.json({
  //       status: 1,
  //       message: 'User updated successfully!',
  //     });
  //   } catch (error: any) {
  //     response.status(400);
  //     return response.json({
  //       status: 0,
  //       message: error.message,
  //     });
  //   }
  // }

  // static async view_info_of_user_by_public(request: Request, response: Response) {
  //   try {
  //     const { username } = request.params;

  //     const user = await User.findOneBy({
  //       username,
  //       status: 1,
  //     });

  //     if (!user) {
  //       response.status(404);
  //       return response.json({
  //         status: 0,
  //         message: 'User not found.',
  //       });
  //     }

  //     return response.json({
  //       status: 1,
  //       data: user,
  //     });
  //   } catch (error: any) {
  //     response.status(400);
  //     return response.json({
  //       status: 0,
  //       message: error.message,
  //     });
  //   }
  // }
}
