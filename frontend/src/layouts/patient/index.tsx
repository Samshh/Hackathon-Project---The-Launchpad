import { Outlet } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import GlobalSheet from "@/components/GlobalSheet";

export default function PatientLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-4 px-8 py-6 bg-gray-50">
      <GlobalSheet/>
      <PatientHeader/>
      <Outlet/>
    </div>
  );
}
