import CurrentAppointmentSection from '../../components/patient/dashboard/CurrentAppointmentSection';
import PastAppointmentsSection from '../../components/patient/dashboard/PastAppointmentsSection';
import PrescriptionsSection from '../../components/patient/dashboard/PrescriptionsSection';
import YourDoctorsSection from '../../components/patient/dashboard/YourDoctorsSection';

export default function PatientDashboardPage() {
  return (
    <main className="grid flex-1 h-screen grid-cols-8 overflow-y-hidden gap-x-6 gap-y-6">
      <CurrentAppointmentSection />
      <PastAppointmentsSection />
      <YourDoctorsSection />
      <PrescriptionsSection />
    </main>
  );
}
