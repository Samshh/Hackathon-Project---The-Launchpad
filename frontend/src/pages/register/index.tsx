import HomeBtn from '../../components/HomeLogo';
import RegistrationChoice from './components/RegistrationChoice';
export default function RegisterPage() {
  return (
    <main className="flex max-w-[90rem] mx-auto px-[3.5rem] pt-[1rem] pb-[3.5rem] h-screen">
      <div className="w-1/2">
        <HomeBtn />
      </div>
      <div className="w-1/2">
        <RegistrationChoice />
      </div>
    </main>
  );
}
