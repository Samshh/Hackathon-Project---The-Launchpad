import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

export default function ProviderCheckpoint() {
  // TODO: Add some providers here that may be needed by libraries (e.g. react-query provider)

  return (
    <>
    <Outlet />
    <Toaster />
    </> 
  )
}