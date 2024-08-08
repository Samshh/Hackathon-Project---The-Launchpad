import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useMemo } from 'react';
import useRegistrationChoiceStore from '../../store';
import { useShallow } from 'zustand/react/shallow';
import RegistrationStepOne from './RegistrationStepOne';
import RegistrationStepTwo from './RegistrationStepTwo';
import RegistrationStepThree from './RegistrationStepThree';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

export default function RegistrationChoice() {
  const { toast } = useToast();
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
    fileUrl,
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
      state.fileUrl,
    ]),
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const isEmailValid = useMemo(() => email === null ? false : emailRegex.test(email), [email]);
  const isPasswordValid = useMemo(() => password === null ? false : passwordRegex.test(password), [password]);

  const registrationAPI = async () => {
    const PatientData = {
      Fname: firstName,
      Lname: lastName,
      Sex: sex,
      Email: email,
      Contact: contactNumber,
      BirthDate: birthday,
      Password: password,
      Documents: fileUrl,
    };

    const DoctorData = {
      Fname: firstName,
      Lname: lastName,
      Address: address,
      Specialization: specialization,
      Department: department,
      Sex: sex,
      Email: email,
      Contact: contactNumber,
      Password: password,
    };

    if (accountType === 'doctor') {
      try {
        console.log(DoctorData);
        const response = await axios.post(
          `${import.meta.env.VITE_CANISTER_BE_ID}/user/doctor/register`,
          DoctorData,
        );
        const data = response.data;
        console.log(data);
        toLogin();
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else if (accountType === 'patient') {
      console.log(PatientData);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_CANISTER_BE_ID}/user/patient/register`,
          PatientData,
        );
        const data = response.data;
        console.log(data);


        // if (fileUrl) {
        //   await uploadPatientRecord(userId, fileUrl);
        // }

        toLogin();
        console.log('Success');
      } catch (error) {
        console.log(error);
        throw error;
      }
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

  const isFilled = useMemo(() => {
    if (currentStep === 1) {
      if (accountType === 'doctor') {
        return Boolean(firstName && lastName && isEmailValid && isPasswordValid && sex && sex !== 'Select' && address);
      } else if (accountType === 'patient') {
        return Boolean(firstName && lastName && isEmailValid && isPasswordValid && sex && sex !== 'Select' && birthday);
      }
    }
    return true;
  }, [accountType, currentStep, firstName, lastName, isEmailValid, isPasswordValid, sex, address, birthday]);

  const isFilledDoctor = useMemo(() => {
    if (currentStep === 2 && accountType === 'doctor') {
      return Boolean(department && department !== 'Select' && specialization);
    }
    return true;
  }, [currentStep, accountType, department, specialization]);

  const isButtonDisabled = useMemo(() => {
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
            onClick={async () => {
              if (currentStep === 2) {
                try {
                  await registrationAPI();
                  toast({
                    title: 'Success',
                    description: 'You have successfully registered.',
                    duration: 5000,
                  });
                  toLogin();
                } catch (error) {
                  console.error(error);
                  toast({
                    title: 'Error',
                    description: 'Email already taken, please try again.',
                    duration: 5000,
                  });
                  goToPrevStep();
                }
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
