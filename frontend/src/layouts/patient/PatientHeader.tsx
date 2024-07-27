// import { useAppointmentsStore } from '@/components/patient/appointments/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Link } from 'react-router-dom';

export default function PatientHeader() {
  // const { toggleOpen } = useAppointmentsStore();
  return (
    <div className="flex items-center w-full gap-8 pb-1">
      <div className="rounded-full size-12 bg-accent"></div>
      <input placeholder="Search for doctors..." className="flex-1 px-6 py-3 rounded-lg shadow-md"></input>
      <DropdownMenu>
        <DropdownMenuTrigger className="grid bg-white border rounded-full size-12 border-accent place-items-center">   
            <p className="text-lg font-semibold">H</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mr-8 max-h-fit">
          <Link to={"/patient"}>
            <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Dashboard</DropdownMenuItem>
          </Link>
          <Link to={"/patient/appointments"}>
            <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">
                Appointments
            </DropdownMenuItem>
          </Link>
          <Link to={"/patient/doctors"}>
            <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Doctors</DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
