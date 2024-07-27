import CurrentAppointmentSection from '../../components/patient/dashboard/CurrentAppointmentSection';
import PrescriptionsSection from '../../components/patient/dashboard/PrescriptionsSection';
import YourDoctorsSection from '../../components/patient/dashboard/yourDoctorsSection/YourDoctorsSection';
import PastAppointmentsSection from '@/components/patient/dashboard/pastAppointmentsSection/PastAppointmentsSection';

export default function PatientDashboardPage() {
  return (
    <main className="grid flex-1 grid-cols-9 overflow-y-hidden gap-x-6 gap-y-6">
      <CurrentAppointmentSection />
      <PastAppointmentsSection />
      <YourDoctorsSection />
      <PrescriptionsSection />
    </main>
  );
}
