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
      <div className="flex flex-col">
        <p className="text-lg">Creating an account</p>
        <p className="font-semibold text-3xl">What type of account do you want to create?</p>
        <div className="flex flex-col gap-[1rem] pt-[1rem] pb-[4rem]">
          <div
            className={`w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] px-[4rem] py-[2rem] cursor-pointer ${activeToggle === 'doctor' ? 'bg-accent' : ''}`}
            onClick={() => handleToggleClick('doctor')}
          >
            <p className={`text-2xl font-semibold text-start ${activeToggle === 'doctor' ? 'text-white' : ''}`}>Doctor</p>
            <p className={`text-xl text-start text-gray-600 ${activeToggle === 'doctor' ? 'text-white' : ''}`}>Handle schedule and provide diagnosis to patients</p>
          </div>
          <div
            className={`w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] px-[4rem] py-[2rem] cursor-pointer ${activeToggle === 'patient' ? 'bg-accent text-white' : ''}`}
            onClick={() => handleToggleClick('patient')}
          >
            <p className={`text-2xl font-semibold text-start ${activeToggle === 'patient' ? 'text-white' : ''}`}>Patient</p>
            <p className={`text-xl text-start text-gray-600 ${activeToggle === 'patient' ? 'text-white' : ''}`}>Find clinics of doctors and schedule appointments</p>
          </div>
        </div>
        <div className="flex justify-end gap-[1rem]">
          <Button variant={"outline"} onClick={returnHome}>
            Back
          </Button>
          <Button onClick={toNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
