import { useShallow } from "zustand/react/shallow";
import useRegistrationChoiceStore from "../../store";
import RegistrationFormDoctor from "../RegistrationForms/RegistrationFormDoctor";
import RegistrationFormPatient from "../RegistrationForms/RegistrationFormPatient";

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
          <RegistrationFormDoctor />
        </>
      )}
      {accountType === 'patient' && (
        <>
          <RegistrationFormPatient />
        </>
      )}
    </div>
  )
}