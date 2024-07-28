import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function ProviderCheckpoint() {
  // TODO: Add some providers here that may be needed by libraries (e.g. react-query provider)

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  )
}