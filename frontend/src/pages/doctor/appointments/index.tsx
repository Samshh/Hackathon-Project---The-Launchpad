// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";
import AppointmentCalendar from "./AppointmentCalendar";
import useAppointmentsStore from "./store";
import axios from 'axios';
import { useQuery } from "react-query";
import { useShallow } from "zustand/react/shallow";

// type AppointmentViewType = 'calendar' | 'list';

const fetchAppointments = async () => {
  const response = await axios.get(`${import.meta.env.VITE_CANISTER_BE_ID}/doctor/appointments`, {
    withCredentials: true
  });

  return response.data.data;
}



export default function DoctorAppointmentsPage() {
  const [
    resetStore,
    setAppointments
  ] = useAppointmentsStore(
    useShallow((state) => [
      state.reset,
      state.setAppointments,
    ])
  )

  const { status } = useQuery("doctor-appointment-calendar", fetchAppointments, {
    enabled: true,
    onSuccess: (data) => {
      setAppointments(data);
    }
  });

  useEffect(() => {
    resetStore()
  }, []);

  // useEffect(() => {

  //   const fetchAppointments = async () => {
  //     try {
  //       const response = await axios.get('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/doctor/appointments', {
  //         withCredentials: true
  //       });
  //       appointmentsData = response.data;
  //       console.log(appointmentsData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     resetStore();
  //   };


  //   fetchAppointments();
  // }, []);

  if (status === "success") {
    return (
      <main className="h-full min-h-[480px] flex-grow flex flex-col justify-start items-stretch gap-4 pt-4">
        <div className="flex flex-row justify-between items-center">
          <h5>Appointments</h5>
        </div>
        

        <AppointmentCalendar />
      </main>
    )
  }

  return null;
}