import { doctorsMockData } from './doctorsMockData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import DoctorsFilterPopover from "@/components/patient/doctors/DoctorsFilterPopover"
import { Filter } from 'lucide-react';
import { useGlobalComponentStore } from '@/components/globalComponentStore';

export default function PatientDoctorsPage() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  // const { toggleDoctorFilterPopover } = useGlobalComponentStore();

  const filteredDoctors = useMemo(() => {
    if (!searchParams.get('name')) return doctorsMockData;

    return doctorsMockData.filter((doctor) => {
      return `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchParams.get('name')!.toLowerCase());
    });
  }, [searchParams]);

  return (
    <div className="flex flex-col flex-1 gap-8 py-3">
      <div className="flex items-center gap-10">
        <p className="pl-6 text-3xl font-bold">Doctors</p>
        <DoctorsFilterPopover/>
      </div>
      <div className="flex flex-col flex-1 px-6 py-3 rounded-lg shadow-md">
        {filteredDoctors.length !== 0 ? (
          <div className="flex-grow h-1 overflow-y-auto">
            <div className="grid grid-cols-5 gap-y-4 gap-x-4">
              {filteredDoctors.map((doctor) => {
                return (
                  <button
                    key={doctor.id}
                    onClick={() => {
                      navigate(`/patient/doctors/${doctor.id}`);
                    }}
                    className="flex flex-col p-3 border border-gray-300 rounded-lg hover:border-accent"
                  >
                    <p className="text-lg font-semibold">
                      Dr. {doctor.firstName} {doctor.lastName}
                    </p>
                    <p className="font-semibold text-gray-500">{doctor.specialization}</p>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid flex-grow pb-12 text-lg font-semibold text-gray-500 place-items-center">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}
