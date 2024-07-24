import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';
import useRegistrationChoiceStore from "./store";
import { useShallow } from "zustand/react/shallow";
import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThreePatient from "./RegistrationStepThreePatient copy";
import RegistrationStepThreeDoctor from "./RegistrationStepThreeDoctor";

export default function RegistrationChoice() {
  const [activeToggle, setActiveToggle] = useState<string>();
  const [
    currentStep,
    accountType,
    goToPrevStep,
    goToNextStep,
    setAccountType,
    reset,
  ] = useRegistrationChoiceStore(
    useShallow((state) => [
      state.step,
      state.accountType,
      state.goToPrevStep,
      state.goToNextStep,
      state.setAccountType,
      state.reset,
    ])
  );

  const navigate = useNavigate();
  const handleToggleClick = (toggle: string) => {
    setActiveToggle(toggle);
  };

  const returnHome = () => {
    navigate("/");
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="flex flex-col justify-between pl-[3.5rem] h-full">
      <div className="flex justify-between items-center h-[3rem]">
        <p className="text-lg font-semibold">Registration</p>
        <p className="text-lg font-light">Step {currentStep + 1} of 3</p>
      </div>
      <div className="flex flex-col h-full">
        {
          currentStep === 0 ? (
            <RegistrationStepOne />
          ) : currentStep === 1 ? (
            <RegistrationStepTwo />
          ) : accountType === 'patient' ? (
            <RegistrationStepThreePatient />
          ) : accountType === 'doctor' ? (
            <RegistrationStepThreeDoctor />
          ) : (
            <Navigate to={'/register'} />
          )
        }

        {/* <div className="flex flex-col justify-center gap-[1rem] h-full">
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
        </div> */}
        <div className="flex justify-end gap-[1rem]">
          <Button 
            variant={"outline"} 
            size={"lg"} 
            onClick={() => {
              if (currentStep === 0) {
                returnHome();
              } else {
                goToPrevStep();
              }
            }}
          >
            Back
          </Button>
          <Button 
            size={"lg"} 
            onClick={() => {
              if (currentStep === 2) {
                // FINISH
              } else {
                goToNextStep();
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
