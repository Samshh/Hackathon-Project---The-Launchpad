import { Outlet } from "react-router-dom";
import PatientHeader from "./PatientHeader";

export default function PatientLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-4 bg-gray-50">
      <PatientHeader/>
      <Outlet/>
    </div>
  );
}
