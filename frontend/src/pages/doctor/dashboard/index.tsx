import DoctorDetailItem from "@/components/doctor/DoctorDetailItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const appointments = [
  {
    id: 1,
    patientName: "Maria Clara",
    date: "January 1, 2024",
    time: "09:00 AM",
  },
  {
    id: 2,
    patientName: "Juan Dela Cruz",
    date: "January 1, 2024",
    time: "10:00 AM",
  },
  {
    id: 3,
    patientName: "Maria Clara",
    date: "January 1, 2024",
    time: "11:00 AM",
  },
];

export default function DoctorDashboardPage() {
  return (
    <main className="h-full min-h-[480px] flex-grow flex flex-col justify-start items-stretch gap-4 pt-4">
      <div className="flex flex-col justify-start items-start">
        <p className="text-sm">Good day,</p>
        <h5>Dr. Ralph Kris Enrique</h5>
      </div>

      <div className="flex-grow flex flex-row justify-start items-stretch gap-4">
        <div className="flex flex-col justify-start items-stretch gap-4 bg-white rounded-md shadow-md px-6 py-4">
          <div className="flex flex-col justify-start items-stretch gap-2">
            <div className="flex flex-col justify-start items-stretch">
              <p className="text-sm text-gray-600">Next Patient</p>
              <h6>Maria Clara</h6>
              <p>05:30 - 06:30 PM</p>
            </div>

            <div className="flex flex-row justify-start items-center gap-2">
              {/* TODO: Change this to appointment link */}
              <Link to="/doctor/appointments">
                <Button variant="secondary">View Patient Details</Button>
              </Link>

              {/* TODO: Change this to next patient's link */}
              <Button>Diagnose</Button>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col justify-start items-stretch gap-4">
            <DoctorDetailItem label="Sex" value="Female" />
            <DoctorDetailItem label="Age" value="20 years old" />
            <DoctorDetailItem label="Reason" value="Consultation" />
            <DoctorDetailItem label="Contact Number" value="09123456789" />
            <DoctorDetailItem label="Note" value="High fever 10 days" />
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-start items-stretch gap-4 px-6 py-4 bg-white rounded-md shadow-md">
          <h6>Recent Appointments</h6>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-8 py-2">Patient</TableHead>
                <TableHead className="p-0 py-2">Date</TableHead>
                <TableHead className="p-0  py-2">Time</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={`recent-appointment-${appointment.id}`}>
                  <TableCell className="p-0">
                    <Link to={`/doctor/appointments/${appointment.id}`} className="block w-full h-full pl-8 py-4 cursor-pointer">
                      {appointment.patientName}
                    </Link>
                  </TableCell>

                  <TableCell className="p-0">
                    <Link to={`/doctor/appointments/${appointment.id}`} className="block w-full h-full py-4 cursor-pointer">
                      {appointment.date}
                    </Link>
                  </TableCell>

                  <TableCell className="p-0">
                    <Link to={`/doctor/appointments/${appointment.id}`} className="block w-full h-full py-4 cursor-pointer">
                      {appointment.time}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}