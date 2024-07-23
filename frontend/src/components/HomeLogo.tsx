import { useNavigate } from "react-router-dom";

export default function HomeBtn() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };
  return (
    <button onClick={toHome} className="flex items-center justify-center">
      <div className="h-[3rem] w-[3rem] bg-accent rounded-full mr-4"></div>
        <p className="text-black font-semibold text-xl">ChainMed Connect</p>
    </button>
  );
}