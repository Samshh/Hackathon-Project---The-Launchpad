import { Outlet } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import GlobalSheet from "@/components/GlobalSheet";
import PatientNav from "./PatientNav"
import GlobalDialog from "@/components/GlobalDialog"

export default function PatientLayout() {
  return (
    <div className="flex flex-col min-h-screen gap-6 px-6 py-4 bg-gray-50">
      <GlobalDialog/>
      <GlobalSheet/>
      <PatientHeader/>
      {/* <PatientNav/> */}
      <Outlet/>
    </div>
  );
}
