import { Outlet } from "react-router-dom";
import DoctorNavbar from "./DoctorNavbar";

export default function DoctorLayout() {
  return (
    <div className="w-full min-h-screen flex-grow flex flex-row justify-start items-stretch">
      <DoctorNavbar />
      <Outlet />
    </div>
  );
}