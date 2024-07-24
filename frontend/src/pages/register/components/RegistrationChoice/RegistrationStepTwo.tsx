import { useShallow } from "zustand/react/shallow";
import useRegistrationChoiceStore from "./store";
import RegisterDoctorStep2 from "../../doctor/step2/index";
import PatientForm from "../../patient/components/PatientForm";

export default function RegistrationStepTwo() {
  const [
    accountType
  ] = useRegistrationChoiceStore(
    useShallow((state) => [
      state.accountType
    ])
  );

  return (
    <div>
      {accountType === 'doctor' && (
        <>
          <RegisterDoctorStep2/>
        </>
      )}
      {accountType === 'patient' && (
        <>
          <PatientForm/>
        </>
      )}
    </div>
  )
}