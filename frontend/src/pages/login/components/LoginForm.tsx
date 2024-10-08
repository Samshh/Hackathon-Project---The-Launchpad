import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

export default function LoginForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [accountType, setAccountType] = useState<string>('Select');

  const toRegister = () => {
    navigate('/register');
  };

  const accountDropdown = (type: string) => {
    setAccountType(type);
  };

  const emailInput = (email: string) => {
    setEmail(email);
  };

  const passwordInput = (pass: string) => {
    setPassword(pass);
  };

  const loginAPI = async () => {
    console.log('Logging in');
    const loginData = {
      Email: email,
      Password: password,
    };

    let endpoint = '';
    if (accountType === 'Doctor') {
      endpoint = `${import.meta.env.VITE_CANISTER_BE_ID}/user/doctor/login`;
    } else if (accountType === 'Patient') {
      endpoint = `${import.meta.env.VITE_CANISTER_BE_ID}/user/patient/login`;
    } else {
      throw new Error('Invalid account type');
    }

    const response = await axios.post(endpoint, loginData, {
      withCredentials: true,
    });

    if (response.data.status === 1) {
      console.log('Login successful:', response.data);
      return response.data;
    } else {
      throw new Error(response.data.message || 'Login failed');
    }
  };

  const toLogin = () => {
    if (accountType === 'Doctor') {
      navigate('/doctor');
    } else if (accountType === 'Patient') {
      navigate('/patient');
    }
  };

  const checkAuth = async () => {
    console.log('Checking auth');
    try {
      const response = await axios.get(`${import.meta.env.VITE_CANISTER_BE_ID}/authenticate`, {
        withCredentials: true,
      });
      const data = await response.data;
      if (data && data.user.TypeIs === 1) {
        setAccountType('Doctor');
        console.log('Authenticated as doctor');
        navigate('/doctor');
      } else if (data && data.user.TypeIs === 2) {
        setAccountType('Patient');
        console.log('Authenticated as patient');
        navigate('/patient');
      } else {
        console.log('Not authenticated');
      }
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="flex flex-col h-full pl-[3.5rem]">
      <div className="flex flex-col flex-grow justify-start items-start gap-[2rem]">
        <div className="flex flex-col justify-start items-start pt-[5rem]">
          <h6 className="font-normal">Good to See You Again!</h6>
          <h3>Your health journey continues here. Please log in to proceed.</h3>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-[0.5rem]">
          <div className="flex flex-col w-full items-start">
            <p>Email:</p>
            <Input onChange={(e) => emailInput(e.target.value)} />
          </div>
          <div className="flex flex-col w-full items-start">
            <p>Password:</p>
            <Input type="password" onChange={(e) => passwordInput(e.target.value)} />
          </div>
          <div className="flex flex-col w-full">
            <p>Account Type:</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={'dropdown'} className="w-full flex justify-start">
                  {accountType}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Account Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => accountDropdown('Doctor')}>Doctor</DropdownMenuItem>
                <DropdownMenuItem onClick={() => accountDropdown('Patient')}>Patient</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-[2rem]">
          <Button
            disabled={!email || !password || !accountType || accountType == 'Select'}
            onClick={async () => {
              try {
                await loginAPI();
                toast({
                  title: 'Success',
                  description: 'Logged in successfully.',
                  duration: 5000,
                });
                toLogin();
              } catch (error) {
                console.error(error);
                toast({
                  title: 'Error',
                  description: 'Email or password is incorrect, please try again.',
                  duration: 5000,
                });
              }
            }}
            size={'lg'}
            className="w-full font-semibold"
          >
            Log in
          </Button>
          <Button onClick={toRegister} variant={'outline'} size={'lg'} className="w-full font-semibold">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
