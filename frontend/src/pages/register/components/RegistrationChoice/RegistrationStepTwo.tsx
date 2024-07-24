import { useShallow } from "zustand/react/shallow";
import useRegistrationChoiceStore from "./store";

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
      <p>Input field 1</p>
      <p>Input field 2</p>
      <p>Input field 3</p>
      <p>Input field 4</p>

      {accountType === 'doctor' && (
        <>
          <p>Address</p>
          <p>Contact number</p>
          <p>Email</p>
        </>
      )}
    </div>
  )
}