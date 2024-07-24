import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';

export default function RegistrationChoice() {
  const [activeToggle, setActiveToggle] = useState<string>();
  const navigate = useNavigate();

  const handleToggleClick = (toggle: string) => {
    setActiveToggle(toggle);
  };

  const toNext = () => {
    if (activeToggle === 'doctor') {
      navigate("/register/register-doctor");
    } else if (activeToggle === 'patient') {
      console.log('patient');
      navigate("/register/register-patient");
    }
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-between pl-[3.5rem] h-full">
      <div className="flex justify-between items-center h-[3rem]">
        <p className="text-lg font-semibold">Registration</p>
        <p className="text-lg font-light">Step 1 of 3</p>
      </div>
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-center gap-[1rem] h-full">
          <div className="flex flex-col">
            <h6 className="font-normal">Creating an account</h6>
            <h4 className="font-semibold">What type of account do you want to create?</h4>
          </div>
          <div
            className={`w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] px-[4rem] py-[2rem] cursor-pointer ${activeToggle === 'doctor' ? 'bg-accent' : ''}`}
            onClick={() => handleToggleClick('doctor')}
          >
            <h5 className={`font-semibold text-start ${activeToggle === 'doctor' ? 'text-white' : ''}`}>Doctor</h5>
            <h6 className={`font-normal text-start text-gray-600 ${activeToggle === 'doctor' ? 'text-white' : ''}`}>Handle schedule and provide diagnosis to patients</h6>
          </div>
          <div
            className={`w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] px-[4rem] py-[2rem] cursor-pointer ${activeToggle === 'patient' ? 'bg-accent text-white' : ''}`}
            onClick={() => handleToggleClick('patient')}
          >
            <h5 className={`font-semibold text-start ${activeToggle === 'patient' ? 'text-white' : ''}`}>Patient</h5>
            <h6 className={`font-normal text-start text-gray-600 ${activeToggle === 'patient' ? 'text-white' : ''}`}>Find clinics of doctors and schedule appointments</h6>
          </div>
        </div>
        <div className="flex justify-end gap-[1rem]">
          <Button variant={"outline"} size={"lg"} onClick={returnHome}>
            Back
          </Button>
          <Button size={"lg"} onClick={toNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
