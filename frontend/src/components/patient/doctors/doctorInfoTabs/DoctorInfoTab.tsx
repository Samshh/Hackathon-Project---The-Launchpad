import { Doctor } from '@/pages/patient/doctors/doctorsMockData';

type DoctorInfoTabProps = {
  doctor: Doctor;
};

export default function DoctorInfoTab({ doctor }: DoctorInfoTabProps) {
  return (
    <div className="grid grid-cols-4 gap-y-8">
      <div>
        <p className="text-sm text-gray-500">Full Name</p>
        <p className="text-lg font-semibold">
          {doctor.firstName} {doctor.lastName}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Department</p>
        <p className="text-lg font-semibold">{doctor.department}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Specialization</p>
        <p className="text-lg font-semibold">{doctor.specialization}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Address</p>
        <p className="text-lg font-semibold">{doctor.address}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-lg font-semibold">{doctor.email}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Contact</p>
        <p className="text-lg font-semibold">{doctor.contact}</p>
      </div>
    </div>
  );
}
