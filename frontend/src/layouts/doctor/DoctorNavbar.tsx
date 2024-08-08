import { CalendarIcon, HomeIcon, HospitalIcon, LogOutIcon, LucideProps, UserIcon } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Cookies from 'js-cookie';

type LucideIcon = React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;

interface DoctorNavLink {
  to: string;
  icon: LucideIcon;
}

const primaryNavLinks: DoctorNavLink[] = [
  {
    to: '/doctor',
    icon: HomeIcon,
  },
  {
    to: '/doctor/appointments',
    icon: CalendarIcon,
  },
  {
    to: '/doctor/patients',
    icon: HospitalIcon,
  },
  {
    to: '/doctor/account',
    icon: UserIcon,
  },
];

export default function DoctorNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col items-center justify-between gap-6 p-4 bg-white rounded-md shadow-md">
      <div className="flex flex-col items-center justify-start gap-10">
        <Link to="/">
          <img src="/logoChainMed.svg" alt="" className="size-8" />
        </Link>

        <div className="flex flex-col items-center justify-start gap-6">
          {primaryNavLinks.map((link) => {
            const NavIcon = link.icon;
            return (
              <NavLink
                to={link.to}
                end={link.to === '/doctor'}
                className={({ isActive }) => `
                  size-12 flex justify-center items-center rounded-md 
                  ${isActive ? 'bg-accent' : ''}
                `}
                key={`link-${link.to}`}
              >
                {({ isActive }) => <NavIcon size={32} className={`${isActive ? 'text-white' : 'text-black'}`} />}
                {/* <div className="bg-gray-400 rounded-full size-8" /> */}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-end gap-6">
        <button
          className="flex items-center justify-center size-12"
          onClick={async () => {
            // TODO: Implement logout
            // await axios.post("http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/logout", {}, {
            //   withCredentials: true,
            // });
            Cookies.remove('token', { domain: 'http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943' });
            Cookies.remove('token');

            navigate('/');
          }}
        >
          <LogOutIcon size={32} />
        </button>
      </div>
    </nav>
  );
}
