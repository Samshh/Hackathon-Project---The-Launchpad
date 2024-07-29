import { Doctor } from 'Database/entities/doctor';
import { Doctor_Schedule } from 'Database/entities/doctor_schedule';
import { Doctor_Schedule_Exception } from 'Database/entities/doctor_schedule_exception';
import { Response, Request } from 'express';
import ScheduleValidator from 'App/Validators/ScheduleValidator';
import njwt from 'njwt';

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret

export default class DoctorScheduleController {

    static async createSchedule(request: Request, response: Response) {
        try {
            const { day, StartTime, EndTime, DoctorID } = request.body;

            // Validate input
            if (day === undefined || !StartTime || !EndTime || !DoctorID) {
                return response.status(400).json({
                    status: 0,
                    message: 'All fields (day, StartTime, EndTime, DoctorID) are required',
                });
            }

            const doctor = await Doctor.findOne({ where: { DoctorID: DoctorID } });

            if (!doctor) {
                return response.status(404).json({
                    status: 0,
                    message: 'Doctor not found',
                });
            }

            const schedule = new Doctor_Schedule();
            schedule.day = day;
            schedule.starttime = StartTime;
            schedule.endtime = EndTime;
            schedule.doctor = doctor;


            await schedule.save();

            return response.status(201).json({
                status: 1,
                message: 'Schedule created successfully',
            });

        } catch (error) {
            console.error('Error creating schedule:', error);
            return response.status(500).json({
                status: 0,
                message: 'Internal server error',
            });
        }
    }

    static async getScheduleofDoctor(request: Request, response: Response) {
        try {
            const token = request.cookies.token;

            if (!token) {
                return response.status(401).json({
                    status: 0,
                    message: 'Unauthorized',
                });
            }

            let decodedToken;
            try {
                decodedToken = njwt.verify(token, JWT_SECRET);
            } catch (error) {
                return response.status(401).json({
                    status: 0,
                    message: 'Invalid token',
                });
            }
            const id = decodedToken.body.id;

            try {
                const doctor = await Doctor.findOne({ where: { DoctorID: id } });

                if (!doctor) {
                    return response.json({
                        status: 0,
                        message: 'Doctor not found',
                    });
                }

                const schedule = await Doctor_Schedule.find({ where: { doctor: doctor } });
                if (!schedule || schedule.length === 0) {
                    return response.json({
                        status: 0,
                        message: 'No schedule found',
                    });
                } else {
                    return response.json({
                        status: 1,
                        data: schedule,
                    });
                }
            } catch (error: any) {
                response.status(400);
                return response.json({
                    status: 0,
                    message: error.message,
                });
            }
        } catch (error) {
            console.error('Error getting schedule:', error);
            return response.status(500).json({
                status: 0,
                message: 'Internal server error',
            });
        }
    }

    static async createScheduleException(request: Request, response: Response) {
        try {
            const { startDate, endDate } = request.body;

            // const token = request.cookies.token;

            // if (!token) {
            //     return response.status(401).json({
            //         status: 0,
            //         message: 'Unauthorized',
            //     });
            // }

            // let decodedToken;
            // try {
            //     decodedToken = njwt.verify(token, JWT_SECRET);
            // } catch (error) {
            //     return response.status(401).json({
            //         status: 0,
            //         message: 'Invalid token',
            //     });
            // }
            // const id = decodedToken.body.id;

            const { id } = request.body

            // Validate input
            if (!startDate || !endDate || !id) {
                return response.status(400).json({
                    status: 0,
                    message: 'All fields (day, StartTime, EndTime, DoctorID) are required',
                });
            }

            const doctor = await Doctor.findOne({ where: { DoctorID: id } });

            if (!doctor) {
                return response.status(404).json({
                    status: 0,
                    message: 'Doctor not found',
                });
            }

            const scheduleException = new Doctor_Schedule_Exception();
            scheduleException.ExceptionDateStart = startDate;
            scheduleException.ExceptionDateEnd = endDate;
            scheduleException.doctor = doctor;

            await scheduleException.save();

            return response.status(201).json({
                status: 1,
                message: 'Schedule created successfully',
            });

        } catch (error) {
            console.error('Error creating schedule :', error);
            return response.status(500).json({
                status: 0,
                message: 'Internal server error',
            });
        }
    }

    static async getScheduleExceptions(request: Request, response: Response) {
        try {
            // const token = request.cookies.token;

            // if (!token) {
            //     return response.status(401).json({
            //         status: 0,
            //         message: "No token provided",
            //     });
            // }

            // let decodedToken;
            // try {
            //     decodedToken = njwt.verify(token, JWT_SECRET);
            // } catch (error) {
            //     return response.status(401).json({
            //         status: 0,
            //         message: "Invalid token",
            //     });
            // }
            // const id = decodedToken.body.id;

            const { id } = request.body

            try {
                const scheduleExceptions = await Doctor_Schedule_Exception.find({
                    where: { doctor: { DoctorID: id } },
                });


                if (scheduleExceptions && scheduleExceptions.length > 0) {
                    const result = scheduleExceptions.map(exception => ({
                        exceptionId: exception.ExceptionID,
                        startTime: exception.ExceptionDateStart,
                        endTime: exception.ExceptionDateEnd,
                    }));

                    return response.json({
                        status: 1,
                        data: result,
                    });
                } else {
                    return response.json({
                        status: 1,
                        data: [],
                    });
                }
            } catch (error: any) {
                response.status(400);
                return response.json({
                    status: 0,
                    message: error.message,
                });
            }
        } catch (error) {
            console.error('Error creating schedule :', error);
            return response.status(500).json({
                status: 0,
                message: 'Internal server error',
            });
        }
    }

}
