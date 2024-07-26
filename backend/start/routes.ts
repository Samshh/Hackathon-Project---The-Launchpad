import { Router } from 'express';
import UsersController from 'App/Controllers/Http/UsersController';
import AppointmentsController from 'App/Controllers/Http/AppointmentsController';
import authenticateJWT from 'App/Middleware/Auth';

const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

// USER
Route.post('/user/doctor/register', UsersController.docRegister);
Route.post('/user/patient/register', UsersController.patRegister);
Route.post('/user/login', UsersController.doctorlogin)
Route.get('/test', authenticateJWT, UsersController.test);
Route.get('/get/all/doctor', UsersController.get_all_doctors);
Route.get('/get/all/patient', UsersController.get_all_patients);



Route.post('/patient/appointment/create', AppointmentsController.patientCreateAppointment);
Route.post('/doctor/appointments', AppointmentsController.getAppointments);
// Route.post('/user/update', isAuth, UsersController.update);

// // EVENT
// Route.post('/event/create', isAuth, EventsController.create);
// Route.post('/event/update/:eventId', isAuth, EventsController.update);
// Route.get('/event/list', isAuth, EventsController.view_all_by_user);
// Route.get('/event/joined/list', isAuth, EventsController.view_all_joined_by_user);

// // EVENT BY ID
// Route.post('/event/:eventId/register', isAuth, GuestsController.register);
// Route.post('/event/:eventId/register/status', isAuth, GuestsController.register_status);
// Route.post('/event/:eventId/guests/list', isAuth, GuestsController.guests_list);
// Route.post('/event/:eventId/guests/:guestId/manage', isAuth, GuestsController.guests_manage);
// Route.post('/event/:eventId/guests/:guestId/checkedin', isAuth, GuestsController.guests_checkedin);

// /*
// |--------------------------------------------------------------------------
// | Public Routes
// |--------------------------------------------------------------------------
// */

// Route.get('/health', ApisController.health);
// Route.get('/config', ApisController.config);

// Route.get('/uploads/:filename', ApisController.readupload);
// Route.post('/upload', isAuth, ApisController.testupload);
// Route.get('/uploads/v2/:filename', ApisController.readupload_v2);

// // EVENT
// Route.get('/event/slug/:slug', EventsController.view_by_slug);

// // USER
// Route.get('/user/:username/event/list', EventsController.view_all_of_user_by_public);
// Route.get('/user/:username/info', UsersController.view_info_of_user_by_public);

export { Route as routes };
