import HomeBtn from '../../components/HomeLogo';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <main className="flex max-w-[90rem] mx-auto px-[3.5rem] pt-[1rem] pb-[3.5rem] h-screen">
      <div className="w-1/2">
        <HomeBtn />
      </div>
      <div className="w-1/2">
        <LoginForm />
      </div>
    </main>
  );
}