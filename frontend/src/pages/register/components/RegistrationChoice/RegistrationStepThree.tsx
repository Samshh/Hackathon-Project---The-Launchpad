import { useShallow } from "zustand/react/shallow";
import useRegistrationChoiceStore from "../../store";
import DoctorFinal from "../RegistrationFinal/DoctorFinal";
import PatientFinal from "../RegistrationFinal/PatientFinal";


export default function RegistrationStepThree() {
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
          <DoctorFinal />
        </>
      )}
      {accountType === 'patient' && (
        <>
          <PatientFinal />
        </>
      )}
    </div>
  )
}