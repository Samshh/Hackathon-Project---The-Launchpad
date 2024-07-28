import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import ProviderCheckpoint from './checkpoints/ProviderCheckpoint';
import AuthCheckpointDoctor from './checkpoints/AuthCheckpointDoctor';
// import AuthCheckpointPatient from './checkpoints/AuthCheckpointPatient';
import DefaultLayout from './layouts/default';
import LoginLayout from './layouts/login';
import RegisterLayout from './layouts/register';
import PatientLayout from './layouts/patient';
import DoctorLayout from './layouts/doctor';
import PatientDashboardPage from './pages/patient';
import DoctorDashboardPage from './pages/doctor/dashboard';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import PatientAppointmentsPage from './pages/patient/appointments';
import DoctorAppointmentsPage from './pages/doctor/appointments';
import DoctorPatientsPage from './pages/doctor/patients';
import DoctorAccountPage from './pages/doctor/account';
import DoctorPatientList from './pages/doctor/patients/DoctorPatientList';
import DoctorPatientDetails from './pages/doctor/patients/DoctorPatientDetails';
import PatientDoctorsPage from './pages/patient/doctors';
import DoctorInfoPage from './pages/patient/doctors/doctorInfoPage';

const router = createBrowserRouter([
  {
    element: <ProviderCheckpoint />,
    children: [
      {
        path: '/',
        element: <DefaultLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        path: 'login',
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
        ],
      },
      {
        path: 'register',
        element: <RegisterLayout />,
        children: [
          {
            index: true,
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <AuthCheckpointDoctor />,
        children: [
          {
            path: 'doctor',
            element: <DoctorLayout />,
            children: [
              {
                index: true,
                element: <DoctorDashboardPage />,
              },
              {
                path: 'appointments',
                element: <DoctorAppointmentsPage />,
              },
              {
                path: 'patients',
                element: <DoctorPatientsPage />,
                children: [
                  {
                    index: true,
                    element: <DoctorPatientList />,
                  },
                  {
                    path: ':patientId',
                    element: <DoctorPatientDetails />,
                  },
                ],
              },
              {
                path: 'account',
                element: <DoctorAccountPage />,
              },
            ],
          },
        ],
      },
      {
        // element: <AuthCheckpointPatient />,
        children: [
          {
            path: 'patient',
            element: <PatientLayout />,
            children: [
              {
                index: true,
                element: <PatientDashboardPage />,
              },
              {
                path: 'appointments',
                element: <PatientAppointmentsPage />,
              },
              {
                path: 'doctors',
                children: [
                  {
                    index: true,
                    element: <PatientDoctorsPage />,
                  },
                  {
                    path: ':doctorId',
                    element: <DoctorInfoPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
      // {
      //   element: <AuthCheckpoint />,
      //   children: [
      //   ]
      // }
    ],
  },
]);

export default router;
