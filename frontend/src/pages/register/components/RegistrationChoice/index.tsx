import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import useRegistrationChoiceStore from '../../store';
import { useShallow } from 'zustand/react/shallow';
import RegistrationStepOne from './RegistrationStepOne';
import RegistrationStepTwo from './RegistrationStepTwo';
import RegistrationStepThree from './RegistrationStepThree';
import axios from 'axios';

export default function RegistrationChoice() {
  const [
    currentStep,
    accountType,
    goToPrevStep,
    goToNextStep,
    reset,
    finalButton,
    setFinalButton,
    firstName,
    lastName,
    email,
    password,
    sex,
    birthday,
    address,
    department,
    specialization,
    contactNumber,
  ] = useRegistrationChoiceStore(
    useShallow((state) => [
      state.step,
      state.accountType,
      state.goToPrevStep,
      state.goToNextStep,
      state.reset,
      state.finalButton,
      state.setFinalButton,
      state.firstName,
      state.lastName,
      state.email,
      state.password,
      state.sex,
      state.birthday,
      state.address,
      state.department,
      state.specialization,
      state.contactNumber,
    ]),
  );

  const registrationAPI = async () => {
    const PatientData = {
      Fname: firstName,
      Lname: lastName,
      Sex: sex,
      Email: email,
      Contact: contactNumber,
      Birthday : birthday,
      Password: password,
    };

    const DoctorData = {
      Fname: firstName,
      Lname: lastName,
      Address: address,
      Specialization: specialization,
      Sex: sex,
      Email: email,
      Contact: contactNumber,
      Password: password,
    };

    if (accountType === 'doctor') {
      try {
        const response = axios.post('http://br5f7-7uaaa-aaaaa-qaaca-cai.localhost:4943/user/doctor/register', DoctorData);
        const data = await response;
        console.log(data);
        toLogin();
      } catch (error) {
        console.log(error);
      }
    } else if (accountType === 'patient') {
        try {
          const response = axios.post('http://br5f7-7uaaa-aaaaa-qaaca-cai.localhost:4943/user/patient/register', PatientData);
          const data = await response;
          console.log(data);
          toLogin();
          console.log('Success');
        }catch (error) {
          console.log(error);
        }
    } else {
      console.log('Error');
    }
  };

  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  };

  const toLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (currentStep === 2) {
      setFinalButton('Finish');
    } else {
      setFinalButton('Next');
    }
  }, [currentStep, setFinalButton]);

  const isFilled = React.useMemo(() => {
    if (currentStep === 1) {
      if (accountType === 'doctor') {
        return Boolean(firstName && lastName && email && password && sex && sex !== 'Select' && address);
      } else if (accountType === 'patient') {
        return Boolean(firstName && lastName && email && password && sex && sex !== 'Select' && birthday);
      }
    }
    return true;
  }, [accountType, currentStep, firstName, lastName, email, password, sex, address, birthday]);

  const isFilledDoctor = React.useMemo(() => {
    if (currentStep === 2 && accountType === 'doctor') {
      return Boolean(department && department !== 'Select' && specialization);
    }
    return true;
  }, [currentStep, accountType, department, specialization]);

  const isButtonDisabled = React.useMemo(() => {
    if (currentStep === 0) return accountType === null;
    if (currentStep === 1) return !isFilled;
    if (currentStep === 2) return accountType === 'doctor' ? !isFilledDoctor : false;
    return false;
  }, [currentStep, accountType, isFilled, isFilledDoctor]);

  return (
    <div className="flex flex-col justify-between pl-[3.5rem] h-full">
      <div className="flex justify-between items-center h-[3rem]">
        <p className="text-lg font-semibold">Registration</p>
        <p className="text-lg font-light">Step {currentStep + 1} of 3</p>
      </div>
      <div className="flex flex-col flex-grow justify-between ">
        {currentStep === 0 ? (
          <RegistrationStepOne />
        ) : currentStep === 1 ? (
          <RegistrationStepTwo />
        ) : currentStep === 2 ? (
          <RegistrationStepThree />
        ) : (
          <Navigate to={'/register'} />
        )}
        <div className="flex justify-end gap-[1rem] mt-[1rem]">
          <Button
            variant={'outline'}
            size={'lg'}
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
            disabled={isButtonDisabled}
            size={'lg'}
            onClick={() => {
              if (currentStep === 2) {
                registrationAPI();
              } else {
                goToNextStep();
              }
            }}
          >
            {finalButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
