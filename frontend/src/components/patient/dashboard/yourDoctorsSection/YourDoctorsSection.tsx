import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { doctorsMockData } from '@/pages/patient/doctors/doctorsMockData';
import { useNavigate } from 'react-router-dom';
import { AllDoctorsResponse } from '@/components/patient/types';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function YourDoctorsSection() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ['alldoctors'],
    queryFn: async () => {
      const response = await axios.get('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/all/doctor');
      return response.data as AllDoctorsResponse;
    },
  });

  if (isLoading) {
    return <div className="grid text-lg place-items-center">Loading...</div>;
  }

  if (error) {
    return <div className="grid text-lg place-items-center">Error loading doctors.</div>;
  }

  if (data) {
    return (
      <section className={`bg-white shadow-md col-span-4 gap-3 rounded-xl p-5 flex flex-col overflow-hidden`}>
        <header className="flex items-center justify-between">
          <p className="text-xl font-bold">Your Doctors</p>
          <Button
            onClick={() => navigate('/patient/doctors')}
            variant={'default'}
            className="flex items-center gap-3 hover:text-white"
          >
            <p>See All</p>
            <ChevronRight className="size-4" />
          </Button>
        </header>
        <div className="flex-grow h-1 overflow-y-auto">
          {data.doctors.length === 0 ? (
            <div className="grid text-lg size-full place-items-center">
              <p className="mb-6">No doctors yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {data.doctors.map((doctor) => {
                return (
                  <div
                    onClick={() => navigate(`/patient/doctors/${doctor.doctorId}`)}
                    key={doctor.doctorId}
                    className="rounded-lg text-start min-h-[80px] border border-gray-400 flex p-3 items-center gap-3 group hover:border-accent hover:cursor-pointer"
                  >
                    <div className="flex-grow line-clamp-2 text-ellipsis">
                      <p className="font-semibold">Dr. {doctor.doctorName}</p>
                      <p className="text-gray-500 ">{doctor.specialization}</p>
                    </div>
                    <ChevronRight className="" preserveAspectRatio="xMaxYMax" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }
}
