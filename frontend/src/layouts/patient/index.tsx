import { Outlet } from "react-router-dom";
import PatientHeader from "./PatientHeader";

export default function PatientLayout() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] flex flex-col px-8 py-6 gap-4">
      <PatientHeader/>
      <Outlet/>
    </div>
  );
}
