import { Doctor } from '@/pages/patient/doctors/doctorsMockData';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import { useShallow } from 'zustand/react/shallow';

type DoctorSheetContentProps = {
  doctor: Doctor;
};

export default function DoctorSheetContent({ doctor }: DoctorSheetContentProps) {
  const [toggleOpenDialog, toggleOpenSheet] = useGlobalComponentStore(
    useShallow((state) => [state.toggleOpenDialog, state.toggleOpenSheet]),
  );
  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex flex-col items-center gap-5">
        <div className="aspect-[4/3] h-[150px] rounded-lg overflow-hidden">
          <img
            src={
              doctor.sex === 'Male'
                ? 'https://static.vecteezy.com/system/resources/previews/017/678/770/non_2x/front-view-doctor-character-using-mask-doctor-character-creation-with-face-emotion-pose-and-gesture-cartoon-style-flat-illustration-male-doctor-finger-pointing-up-holding-clipboard-vector.jpg'
                : 'https://i.pinimg.com/736x/13/e5/85/13e585664a1df5f548812b47a11f0889.jpg'
            }
            className="object-cover size-full"
          />
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold">
            Dr. {doctor.firstName} {doctor.lastName}
          </p>
          <p className="text-lg font-semibold text-gray-500">{doctor.specialization}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-6">
        <p className="text-xl font-semibold">Details</p>
        <div className="flex-grow h-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-y-6">
            <p className="text-gray-500">Department</p>
            <p>{doctor.department}</p>
            <p className="text-gray-500">Specialization</p>
            <p>{doctor.specialization}</p>
            <p className="text-gray-500">Address</p>
            <p className="max-w-[200px] break-words">{doctor.address}</p>
            <p className="text-gray-500 max-w-[200px] break-words">Email</p>
            <p>{doctor.email}</p>
            <p className="text-gray-500">Contact</p>
            <p>{doctor.contact}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
            toggleOpenDialog(<div className='h-[500px]'>hello world</div>);
        }}
        className="flex items-center justify-center w-full px-6 py-2 text-lg text-white rounded-lg bg-accent"
      >
        Book Appointment
      </button>
    </div>
  );
}
