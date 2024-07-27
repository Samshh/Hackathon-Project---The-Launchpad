import { ChevronRight } from 'lucide-react';
import { appointmentsMockData } from '@/components/patient/appointments/appointmentsMockData';
import { isEtaBeforeCurrent } from '@/lib/utils';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import AppointmentSheetContent from '@/components/patient/appointments/AppointmentSheetContent';

export default function PrescriptionsSection() {
  const { toggleOpenSheet } = useGlobalComponentStore();
  return (
    <section className="flex flex-col col-span-5 gap-4 p-5 overflow-y-hidden bg-white shadow-md rounded-xl">
      <p className="text-xl font-bold">Prescriptions</p>
      <div className="flex-grow h-1 overflow-y-auto">
        <div className="flex flex-col">
          {appointmentsMockData.map((appointment, i) => {
            const isEtaBeforeCurr = isEtaBeforeCurrent(appointment.ETA);
            if (appointment.status === 1 && !isEtaBeforeCurr) {
              return (
                <button
                  onClick={() => toggleOpenSheet(<AppointmentSheetContent appointment={appointment} />)}
                  key={i}
                  className="flex items-center gap-3 px-3 py-6 rounded-md text-start bg-gray-50 hover:bg-gray-100"
                >
                  <p className="flex-1 line-clamp-2 text-ellipsis ">{appointment.prescription}</p>

                  <ChevronRight className="mr-8 size-5"/>
                </button>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
