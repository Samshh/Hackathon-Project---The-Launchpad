import { Outlet, Navigate } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import GlobalSheet from "@/components/GlobalSheet";
import axios from "axios";

export default function PatientLayout() {
  
  const auth = axios.get("http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/authenticate", {withCredentials: true});
  
  if (!auth) {
    return <Navigate to="/login"/>;
  }

  return (
    <div className="flex flex-col min-h-screen gap-4 px-8 py-6 bg-gray-50">
      <GlobalSheet/>
      <PatientHeader/>
      <Outlet/>
    </div>
  );
}
