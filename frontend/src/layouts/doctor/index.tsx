import { Outlet, Navigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DoctorNavbar from './DoctorNavbar';
import axios from 'axios';

export default function DoctorLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await axios.get('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/authenticate', {
          withCredentials: true,
        });
        const data = await response.data;
        if (data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        console.log(data);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    authenticate();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="w-full h-screen flex-grow flex flex-row justify-start items-stretch p-2 gap-4 bg-gray-50">
      <DoctorNavbar />
      <Outlet />
    </div>
  );
}
