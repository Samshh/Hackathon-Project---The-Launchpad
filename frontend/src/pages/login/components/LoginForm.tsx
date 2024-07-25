import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const toRegister = () => {
    navigate('/register');
  };
  return (
    <div className="flex flex-col h-full pl-[3.5rem]">
      <div className="flex flex-col flex-grow justify-start items-start gap-[2rem]">
        <div className="flex flex-col justify-start items-start pt-[5rem]">
          <h6 className="font-normal">Login</h6>
          <h3>Welcome back!</h3>
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          <p>Email:</p>
          <Input />
          <p>Password:</p>
          <Input type="password" />
        </div>
        <div className="flex items-center justify-center w-full gap-[2rem]">
          <Button size={'lg'} className="w-full font-semibold">
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
