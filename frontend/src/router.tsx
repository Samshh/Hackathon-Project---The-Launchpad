import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import ProviderCheckpoint from "./checkpoints/ProviderCheckpoint";
import AuthCheckpoint from "./checkpoints/AuthCheckpoint";
import DefaultLayout from "./layouts/DefaultLayout";
import PatientLayout from "./layouts/PatientLayout";
import DoctorLayout from "./layouts/DoctorLayout";
import PatientDashboardPage from "./pages/patient";
import DoctorDashboardPage from "./pages/doctor";

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