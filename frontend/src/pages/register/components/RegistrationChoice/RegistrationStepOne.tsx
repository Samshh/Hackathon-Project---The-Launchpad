import useRegistrationChoiceStore from "../../store";
import { useShallow } from "zustand/react/shallow";

export default function RegistrationStepOne() {
  const [
    accountType,
    setAccountType,
    ] = useRegistrationChoiceStore(
    useShallow((state) => [
      state.accountType,
      state.setAccountType,
    ])
  );

  return (
    <div className="flex flex-col justify-center gap-[1rem] h-full">
      <div className="flex flex-col">
        <h6 className="font-normal">Creating an account</h6>
        <h4 className="font-semibold">What type of account do you want to create?</h4>
      </div>
      <div
        className={`w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] px-[4rem] py-[2rem] cursor-pointer ${accountType === 'doctor' ? 'bg-accent' : ''}`}
        onClick={() => setAccountType('doctor')}
      >
        <h5 className={`font-semibold text-start ${accountType === 'doctor' ? 'text-white' : ''}`}>Doctor</h5>
        <h6 className={`font-normal text-start text-gray-600 ${accountType === 'doctor' ? 'text-white' : ''}`}>
          Handle schedule and provide diagnosis to patients
        </h6>
      </div>
      <div
        className={`w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] px-[4rem] py-[2rem] cursor-pointer ${accountType === 'patient' ? 'bg-accent text-white' : ''}`}
        onClick={() => setAccountType('patient')}
      >
        <h5 className={`font-semibold text-start ${accountType === 'patient' ? 'text-white' : ''}`}>Patient</h5>
        <h6 className={`font-normal text-start text-gray-600 ${accountType === 'patient' ? 'text-white' : ''}`}>
          Find clinics of doctors and schedule appointments
        </h6>
      </div>
    </div>
  );
}
