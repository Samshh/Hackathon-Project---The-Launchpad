import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { doctorsMockData } from '@/pages/patient/doctors/doctorsMockData';
import { useNavigate } from 'react-router-dom';

export default function YourDoctorsSection() {
  const navigate = useNavigate();

  return (
    <section className={`bg-white shadow-md col-span-4 gap-3 rounded-xl p-5 flex flex-col overflow-hidden`}>
      <header className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Doctors</p>
        <Button variant={'default'} className="flex items-center gap-3 hover:text-white">
          <p>See All</p>
          <ChevronRight className="size-4" />
        </Button>
      </header>
      <div className="flex-grow h-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {doctorsMockData.map((doctor) => {
            return (
              <div
                onClick={() => navigate(`/patient/doctors/${doctor.id}`)}
                key={doctor.id}
                className="rounded-lg text-start min-h-[80px] border border-gray-400 flex p-3 items-center gap-3 group hover:border-accent hover:cursor-pointer"
              >
                <div className="flex-grow line-clamp-2 text-ellipsis">
                  <p className="font-semibold">
                    Dr. {doctor.firstName} {doctor.lastName}
                  </p>
                  <p className="text-gray-500 ">{doctor.specialization}</p>
                </div>
                <ChevronRight className="" preserveAspectRatio="xMaxYMax" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
