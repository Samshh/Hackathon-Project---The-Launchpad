import { doctorsMockData } from './doctorsMockData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import DoctorsFilterPopover from '@/components/patient/doctors/DoctorsFilterPopover';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import { useQuery } from 'react-query';
import axios from 'axios';
import { AllDoctorsResponse } from '@/components/patient/types';

export default function PatientDoctorsPage() {
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const { selectedDoctorFilters } = useGlobalComponentStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['alldoctors'],
    queryFn: async () => {
      const response = await axios.get('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/all/doctor');
      return response.data as AllDoctorsResponse;
    },
  });

  // const filteredDoctors = useMemo(() => {
  //   if (searchParams.get('name') || searchParams.get('departments')) {
  //     const selectedDepartmentsInParams = searchParams
  //       .get('departments')
  //       ?.split(',')
  //       .map((dep) => dep.trim().toLowerCase());

  //     return doctorsMockData.filter((doctor) => {
  //       return (
  //         // `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchParams.get('name')!.toLowerCase()) ||
  //         selectedDepartmentsInParams?.includes(doctor.department.toLowerCase())
  //       );
  //     });
  //   }
  //   return doctorsMockData;
  // }, [searchParams]);

  if (error) {
    return (
      <div className="grid flex-grow py-3 place-items-center">
        There was an error loading this page. Please try again later.
      </div>
    );
  }

  if (isLoading) {
    return <div className="grid flex-grow py-3 place-items-center">Loading...</div>;
  }

  if (data) {
    return (
      <div className="flex flex-col flex-1 gap-8 py-3">
        <div className="flex items-center gap-10">
          <p className="pl-6 text-3xl font-bold">Doctors</p>
          <DoctorsFilterPopover />
        </div>
        <div className="flex flex-col flex-1 px-6 py-3 rounded-lg shadow-md">
          <div className="flex-grow h-1 overflow-y-auto">
            {data.doctors.length === 0 ? (
              <div className="grid text-lg size-full place-items-center">
                <p className="mb-6">No doctors yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-y-4 gap-x-4">
                {data.doctors.map((doctor) => {
                  return (
                    <button
                      key={doctor.doctorId}
                      onClick={() => {
                        navigate(`/patient/doctors/${doctor.doctorId}`);
                      }}
                      className="flex flex-col p-3 border border-gray-300 rounded-lg hover:border-accent"
                    >
                      <p className="text-lg font-semibold">Dr. {doctor.doctorName}</p>
                      <p className="font-semibold text-gray-500">{doctor.specialization}</p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
