import { Doctor } from '@/pages/patient/doctors/doctorsMockData';
import {DoctorData} from "@/pages/patient/types"

type DoctorInfoTabProps = {
  doctorInfo: DoctorData;
};

export default function DoctorInfoTab({ doctorInfo }: DoctorInfoTabProps) {
  return (
    <div className="grid grid-cols-4 gap-y-8">
      <div>
        <p className="text-sm text-gray-500">Full Name</p>
        <p className="text-lg font-semibold">
          {doctorInfo.name}
        </p>
      </div>
      {/* <div>
        <p className="text-sm text-gray-500">Department</p>
        <p className="text-lg font-semibold">{doctorInfo.department}</p>
      </div> */}
      <div>
        <p className="text-sm text-gray-500">Specialization</p>
        <p className="text-lg font-semibold">{doctorInfo.specialization}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Address</p>
        <p className="text-lg font-semibold">{doctorInfo.address}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-lg font-semibold">{doctorInfo.email}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Contact</p>
        <p className="text-lg font-semibold">{doctorInfo.contact}</p>
      </div>
    </div>
  );
}
