import { useNavigate } from "react-router-dom";
import HomeBtn from "../../components/HomeBtn";
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
        <div className="flex items-center justify-center">
          <button 
          onClick={toLogin} 
          className="h-[3rem] w-[6rem] border-[0.063rem] border-black rounded-[0.375rem] text-black font-medium text-base mr-[0.625rem]"
          >
            Login
            </button>
          <button 
          onClick={toRegister} 
          className="h-[3rem] w-[9rem] rounded-[0.375rem] bg-accent text-white font-medium text-base"
          >
            Get Started
            </button>
        </div>
      </nav>
      <section className="flex items-center min-h-[33.75rem] h-full">
        <div className="w-1/2">
          <h1 className="text-6xl text-black">Schedule appointments with doctors in a safe and secure way.</h1>
          <p className="text-2xl text-gray-600 pt-8">ChainMed Connect is an online doctor appointment scheduling app that uses the power of blockchain to keep your medical data encrypted.</p>
          <button 
          onClick={toRegister} 
          className="h-[3rem] w-[9rem] rounded-[0.375rem] bg-accent text-white font-medium text-base mt-[1rem]"
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}