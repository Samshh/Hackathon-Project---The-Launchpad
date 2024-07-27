import { Calendar, LogOut } from 'lucide-react';

export default function PatientNav() {
  return (
    <div className="flex flex-col min-h-full px-8 py-6 text-gray-300 bg-accent">
      <div className="flex items-center gap-2">
        <div className="bg-green-500 rounded-full size-6"></div>
        <p className="text-2xl font-bold text-white">Chainmed</p>
      </div>
      <div className="flex flex-col flex-1 gap-8 mt-12 font-semibold text-gray-300">
        <button className="flex items-center gap-6">
          <Calendar className="size-5 stroke-white" />
          <p className='text-white'>Dashboard</p>
        </button>
        <button className="flex items-center gap-6">
          <Calendar className="size-5 stroke-gray-300" />
          <p>Appointments</p>
        </button>
        <button className="flex items-center gap-6">
          <Calendar className="size-5 stroke-gray-300" />
          <p>Doctors</p>
        </button>
      </div>
      <button className="flex items-center gap-6">
        <LogOut className='size-5 stroke-gray-300'/>
        <p>Logout</p>
      </button>
    </div>
  );
}


// import { Calendar, LogOut } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function PatientNav() {
//   return (
//     <div className="flex flex-col min-h-full overflow-hidden text-gray-600 bg-white rounded-lg shadow-md">
//       <div className="flex items-center gap-2">
//         {/* <div className="rounded-full bg-accent size-6"></div> */}
//         <p className="mt-6 ml-4 text-2xl font-bold">LOGO</p>
//       </div>
//       <div className="flex flex-col flex-1 mt-12 font-semibold">
//         <Link to="/patient" className="flex items-center gap-6 px-5 py-4 hover:bg-accent hover:text-white group">
//           <Calendar className="size-6 stroke-gray-600 group-hover:stroke-white" />
//           <p>Dashboard</p>
//         </Link>
//         <Link
//           to="/patient/appointments"
//           className="flex items-center gap-6 px-5 py-4 hover:bg-accent hover:text-white group"
//         >
//           <Calendar className="size-6 stroke-gray-600 group-hover:stroke-white" />
//           <p>Appointments</p>
//         </Link>
//         <Link
//           to="/patient/doctors"
//           className="flex items-center gap-6 px-5 py-4 hover:bg-accent hover:text-white group"
//         >
//           <Calendar className="size-6 stroke-gray-600 group-hover:stroke-white" />
//           <p>Doctors</p>
//         </Link>
//       </div>
//       <button className="flex items-center gap-6 px-5 py-4 hover:bg-accent hover:text-white group">
//         <LogOut className="size-6 stroke-gray-600 group-hover:stroke-white" />
//         <p>Logout</p>
//       </button>
//     </div>
//   );
// }

