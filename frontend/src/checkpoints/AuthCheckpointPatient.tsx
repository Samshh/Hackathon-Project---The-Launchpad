import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AuthCheckpoint() {
  const [isAuth, setIsAuth] = useState<true | false | null>(null);

  useEffect(() => {
      const authenticate = async () => {
          try {
              let response = await axios.get(`${import.meta.env.VITE_CANISTER_BE_ID}/authenticate`, {
                  withCredentials: true,
              });

              const data = await response.data;
              if (data && data.user.TypeIs === 2) {
                  setIsAuth(true);
              } else {
                  setIsAuth(false);
              }
              console.log(data);
          } catch (error) {
              setIsAuth(false);
          }
      };
      authenticate();
  }, []);

  if (isAuth === null) {
      return null;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;

  return <Outlet />;
}
