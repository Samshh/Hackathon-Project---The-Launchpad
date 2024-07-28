import { useParams } from 'react-router-dom';
import { Doctor } from './doctorsMockData';
import DoctorInfoPageTabs from './doctorInfoTabs';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import BookAppointmentDialogContent from '@/components/patient/doctors/BookAppointmentDialogContent';

const doctorTemp: Doctor = {
  id: 'D001',
  firstName: 'John',
  lastName: 'Smith',
  address: '123 Main St, Anytown, USA',
  department: 'Cardiology',
  specialization: 'Interventional Cardiology',
  sex: 'Male',
  email: 'john.smith@hospital.com',
  contact: '555-1234',
};

export default function DoctorInfoPage() {
  const { doctorId } = useParams();
  const { toggleOpenDialog } = useGlobalComponentStore();
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
            <p className="text-2xl font-bold">{doctorId}</p>
            <p className="text-xl font-medium text-gray-500">{doctorTemp.specialization}</p>
          </div>
        </div>
        <button
          onClick={() => toggleOpenDialog(<BookAppointmentDialogContent />)}
          className="px-4 py-2 ml-auto text-lg text-white rounded-lg bg-accent"
        >
          Book Appointment
        </button>
      </div>
      <DoctorInfoPageTabs doctor={doctorTemp} />
    </div>
  );
}
