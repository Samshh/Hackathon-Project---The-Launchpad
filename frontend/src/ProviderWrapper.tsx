import { Outlet } from "react-router-dom";

export default function ProviderWrapper() {
  // TODO: Add some providers here that may be needed by libraries (e.g. react-query provider)

  return (
    <Outlet />
  )
}