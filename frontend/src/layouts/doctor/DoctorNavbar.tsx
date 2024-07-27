import { NavLink, useNavigate } from "react-router-dom";

interface DoctorNavLink {
  to: string;
  // icon: React.ReactNode; 
}

const primaryNavLinks: DoctorNavLink[] = [
  {
    to: "/doctor"
  },
  {
    to: "/doctor/appointments"
  },
  {
    to: "/doctor/patients"
  },
  {
    to: "/doctor/account"
  },
];

export default function DoctorNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col justify-between items-center rounded-md shadow-md p-4 bg-white gap-6">
      <div className="flex flex-col justify-start items-center gap-6">
        {primaryNavLinks.map((link) => (
          <NavLink
            to={link.to}
            end={link.to === "/doctor"}
            className={({ isActive }) => `
              size-12 flex justify-center items-center rounded-md 
              ${isActive ? 'bg-accent' : ''}
            `}
            key={`link-${link.to}`}
          >
            <div className="size-8 bg-gray-400 rounded-full" /> {/* icon */}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col justify-end items-center gap-6">
        <button 
          className="size-12 flex justify-center items-center"
          onClick={() => {
            // TODO: Implement logout
            navigate("/");
          }}
        >
          <div className="size-8 bg-gray-400 rounded-full"/> {/* icon */}
        </button>
      </div>
    </nav>
  );
}