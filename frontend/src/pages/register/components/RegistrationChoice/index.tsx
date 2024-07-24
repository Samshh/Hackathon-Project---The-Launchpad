import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React, { useEffect } from 'react';
import useRegistrationChoiceStore from "../../store";
import { useShallow } from "zustand/react/shallow";
import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";

export default function RegistrationChoice() {
  const [
    currentStep,
    accountType,
    goToPrevStep,
    goToNextStep,
    reset,
  ] = useRegistrationChoiceStore(
    useShallow((state) => [
      state.step,
      state.accountType,
      state.goToPrevStep,
      state.goToNextStep,
      state.reset,
    ])
  );


  const navigate = useNavigate();

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
      <div className="flex flex-col flex-grow justify-between ">
        {
          currentStep === 0 ? (
            <RegistrationStepOne />
          ) : currentStep === 1 ? (
            <RegistrationStepTwo />
          ) : currentStep === 2 ? (
            <RegistrationStepThree />
          ) : (
            <Navigate to={'/register'} />
          )
        }
        <div className="flex justify-end gap-[1rem] mt-[1rem]">
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
            disabled={accountType === null}
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
