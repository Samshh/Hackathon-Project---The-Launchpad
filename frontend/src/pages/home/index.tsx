import { useNavigate } from "react-router-dom";
import HomeBtn from "../../components/HomeLogo";
import { Button } from "../../components/ui/button";
export default function HomePage() {
  const navigate = useNavigate();

  const toRegister = () => {
    navigate('/register');
  };

  const toLogin = () => {
    navigate('/login');
  };

  return (
    <main className="max-w-[90rem] mx-auto px-[3.5rem] pt-[1rem] pb-[4.5rem] h-screen">
      <nav className="sticky top-0 flex items-center justify-between">
        <HomeBtn />
        <div className="flex items-center justify-center gap-[1rem]">
          <Button variant={"outline"} onClick={toLogin}>
            Login
            </Button>
          <Button onClick={toRegister}>
            Register
            </Button>
        </div>
      </nav>
      <section className="flex items-center min-h-[33.75rem] h-full">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-black">Schedule appointments with doctors in a safe and secure way.</h1>
          <p className="text-2xl text-gray-600 pt-8">ChainMed Connect is an online doctor appointment scheduling app that uses the power of blockchain to keep your medical data encrypted.</p>
          <Button onClick={toRegister} className="mt-[1rem]">
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}