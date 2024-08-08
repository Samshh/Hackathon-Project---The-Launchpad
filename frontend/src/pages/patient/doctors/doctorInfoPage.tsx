import { useParams } from 'react-router-dom';
import DoctorInfoPageTabs from './doctorInfoTabs';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import BookAppointmentDialogContent from '@/components/patient/doctors/BookAppointmentDialogContent';
import { useQuery } from "react-query"
import axios from "axios"
import { Doctor } from "../types";


export default function DoctorInfoPage() {
  const { doctorId } = useParams();
  const { toggleOpenDialog } = useGlobalComponentStore();

  const { data } = useQuery({
    queryKey: ['doctorInfo'],
    queryFn: async () => {
      const response = await axios.get(`http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/doctor/${doctorId}`)
      console.log(response);
      return response.data.data as Doctor;
    }
  })

  if (data) {
    return (
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex items-center py-4">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-full size-24">
              <img
                src="https://i.pinimg.com/736x/13/e5/85/13e585664a1df5f548812b47a11f0889.jpg"
                className="object-cover size-full"
              />
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold">{data.doctorName}</p>
              <p className="text-xl font-medium text-gray-500">{data.specialization}</p>
            </div>
          </div>
          <button
            onClick={() => toggleOpenDialog(<BookAppointmentDialogContent doctor={data} />)}
            className="px-4 py-2 ml-auto text-lg text-white rounded-lg bg-accent"
          >
            Book Appointment
          </button>
        </div>
        <DoctorInfoPageTabs doctorInfo={data} />
      </div>
    );
  }
}
