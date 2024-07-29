import { Outlet } from 'react-router-dom';
import DoctorNavbar from './DoctorNavbar';
import GlobalSheet from '@/components/GlobalSheet';

export default function DoctorLayout() {

  return (
    <div className="w-full h-screen flex-grow flex flex-row justify-start items-stretch p-2 gap-4 bg-gray-50">
      <DoctorNavbar />
      <Outlet />
      <GlobalSheet />
    </div>
  );
}
