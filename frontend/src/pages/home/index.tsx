import { useNavigate } from 'react-router-dom';
import HomeBtn from '../../components/HomeLogo';
import { Button } from '../../components/ui/button';
export default function HomePage() {
  const navigate = useNavigate();

  const toRegister = () => {
    navigate('/register');
  };

  const toLogin = () => {
    navigate('/login');
  };

  return (
    <main className="flex flex-col justify-between max-w-[90rem] mx-auto px-[3.5rem] pt-[1rem] pb-[4.5rem] h-screen">
      <nav className="sticky top-0 flex items-center justify-between">
        <HomeBtn />
        <div className="flex items-center justify-center gap-[1rem]">
          <Button size={'lg'} variant={'outline'} onClick={toLogin}>
            Login
          </Button>
          <Button size={'lg'} onClick={toRegister}>
            Register
          </Button>
        </div>
      </nav>
      <div className="flex items-center min-h-[33.75rem] h-full">
        <div className="flex flex-col w-1/2 gap-[1rem]">
          <h1 className="font-bold text-black">Schedule appointments with doctors in a safe and secure way.</h1>
          <h5 className="font-normal text-gray-600">
            ChainMed Connect is an online doctor appointment scheduling app that uses the power of blockchain to keep
            your medical data encrypted.
          </h5>
          <Button size={'lg'} onClick={toRegister} className="w-min">
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}
