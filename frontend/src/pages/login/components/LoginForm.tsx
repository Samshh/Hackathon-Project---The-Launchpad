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
import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
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

    const loginData = {
      Email: email,
      Password: password,
      AccountType: accountType,
    };

    try {
      const response = await axios.post('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/user/login', loginData, {
        withCredentials: true
      });
      console.log(response.data);
      toLogin();
    } catch (error: any) {
      console.error(error.message);
    }

  };


  const toLogin  = () => {
    if (accountType === 'Doctor') {
      navigate('/doctor');
      console.log(email);
      console.log(password);
    } else if (accountType === 'Patient') {
      navigate('/patient');
      console.log(email);
      console.log(password);
    }
  };
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
            onClick={loginAPI}
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
