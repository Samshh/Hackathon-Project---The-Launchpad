import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function PatientHeader() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchParams, _] = useSearchParams();
  const location = useLocation();

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('name', search);
    navigate(`${location.pathname}?${newSearchParams.toString()}`);
    // navigate(`/patient/doctors${search && `?name=${search}`}`);
  };

  return (
    <div className="flex items-center w-full gap-8 pb-1">
      <img src="/logoChainMed.svg" alt="" className="size-12" />
      <form onSubmit={onSubmit} className="flex-grow">
        <Input
          placeholder="Search for doctors..."
          className="flex-grow w-full py-6 rounded-lg shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
        <input type="submit" className="hidden" />
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger className="grid bg-white border rounded-full size-12 border-accent place-items-center">
          <p className="text-lg font-semibold">H</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mr-8 max-h-fit">
          <Link to={'/patient'}>
            <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Dashboard</DropdownMenuItem>
          </Link>
          <Link to={'/patient/appointments'}>
            <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Appointments</DropdownMenuItem>
          </Link>
          <Link to={'/patient/doctors'}>
            <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Doctors</DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="py-3 font-semibold hover:cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
