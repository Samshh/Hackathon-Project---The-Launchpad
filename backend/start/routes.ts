import { Router } from 'express';
import UsersController from 'App/Controllers/Http/UsersController';
import AppointmentsController from 'App/Controllers/Http/AppointmentsController';
import FileController from 'App/Controllers/Http/FileController';
import DoctorScheduleController from 'App/Controllers/Http/DoctorScheduleController';
import AuthMiddleware from 'App/Middleware/Auth';
import jwtCreate from 'App/Middleware/jwtCreate';
const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/
Route.get('/authenticate', UsersController.authenticate);
Route.post('/jwt', jwtCreate.createJWT);
Route.post('/logout', UsersController.logout);
// USER
// Register and loginA
Route.post('/user/doctor/register', UsersController.docRegister);
Route.post('/user/patient/register', UsersController.patRegister);
Route.post('/user/doctor/login', UsersController.doctorlogin)
Route.post('/user/patient/login', UsersController.patientlogin)

Route.get('/allFiles', FileController.getAllFiles);
// all users
Route.get('/get/all/doctor', UsersController.get_all_doctors);
Route.get('/get/all/patient', UsersController.get_all_patients);
// By ID
Route.get('/get/patient/:id', UsersController.get_patient_by_id);
Route.get('/get/doctor/:id', UsersController.get_doctor_by_id);

// Doctor routes
Route.get('/get/mypatientlist', AppointmentsController.mypatientlist);
Route.get('/doctor/appointments' ,AppointmentsController.getAppointments);
Route.post('/doctor/schedule/create', DoctorScheduleController.createSchedule);
Route.get('/doctor/schedule', DoctorScheduleController.getScheduleofDoctor);
Route.post('/doctor/schedule/exception/create', DoctorScheduleController.createScheduleException);
Route.get('/doctor/schedule/exception', DoctorScheduleController.getScheduleExceptions);

// Patient routes
Route.post('/patient/appointment/create', AppointmentsController.patientCreateAppointment);


export { Route as routes };
