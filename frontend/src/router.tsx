import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import ProviderCheckpoint from "./checkpoints/ProviderCheckpoint";
import AuthCheckpoint from "./checkpoints/AuthCheckpoint";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import RegisterLayout from "./layouts/RegisterLayout";
import PatientLayout from "./layouts/PatientLayout";
import DoctorLayout from "./layouts/DoctorLayout";
import PatientDashboardPage from "./pages/patient";
import DoctorDashboardPage from "./pages/doctor";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

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