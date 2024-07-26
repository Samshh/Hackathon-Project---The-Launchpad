import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import ProviderCheckpoint from "./checkpoints/ProviderCheckpoint";
import AuthCheckpoint from "./checkpoints/AuthCheckpoint";
import DefaultLayout from "./layouts/default";
import LoginLayout from "./layouts/login";
import RegisterLayout from "./layouts/register";
import PatientLayout from "./layouts/patient";
import DoctorLayout from "./layouts/doctor";
import PatientDashboardPage from "./pages/patient";
import DoctorDashboardPage from "./pages/doctor";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PatientAppointmentsPage from "./pages/patient/appointments";

const router = createBrowserRouter([
  {
    element: <ProviderCheckpoint />,
    children: [
      {
        element: <AuthCheckpoint />,
        children: [
          {
            path: "/",
            element: <DefaultLayout />,
            children: [
              {
                index: true,
                element: <HomePage />
              }
            ]
          },
          {
            path: "login",
            element: <LoginLayout />,
            children: [
              {
                index: true,
                element: <LoginPage />
              }
            ]
          },
          {
            path: "register",
            element: <RegisterLayout />,
            children: [
              {
                index: true,
                element: <RegisterPage />
              }
            ]
          },
          {
            path: "patient",
            element: <PatientLayout />,
            children: [
              {
                index: true,
                element: <PatientDashboardPage />
              },
              {
                path: "appointments",
                index: true,
                element: <PatientAppointmentsPage/>
              }
            ]
          },
          {
            path: "doctor",
            element: <DoctorLayout />,
            children: [
              {
                index: true,
                element: <DoctorDashboardPage />
              }
            ]
          },
          {
            path: "*",
            element: <Navigate to="/" replace />
          }
        ]
      }
    ]
  }
]);

export default router;