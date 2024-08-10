import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useRegistrationChoiceStore from '../../store';
import { useShallow } from 'zustand/react/shallow';
import { useState } from 'react';

export default function RegistrationFormDoctor() {
  const [
    setEmail,
    email,
    setPassword,
    password,
    setFirstName,
    firstName,
    setLastName,
    lastName,
    setSex,
    sex,
    setContact,
    contactNumber,
    setAddress,
    address,
  ] = useRegistrationChoiceStore(
    useShallow((state) => [
      state.setEmail,
      state.email,
      state.setPassword,
      state.password,
      state.setFirstName,
      state.firstName,
      state.setLastName,
      state.lastName,
      state.setSex,
      state.sex,
      state.setContactNumber,
      state.contactNumber,
      state.setAddress,
      state.address,
    ]),
  );

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validateEmail = (value: string) => {
    setEmail(value);
    setEmailError(!emailRegex.test(value));
  };

  const validatePassword = (value: string) => {
    setPassword(value);
    setPasswordError(!passwordRegex.test(value));
  };

  const validateFirstName = (value: string) => {
    setFirstName(value);
    setFirstNameError(value.length === 0);
  };

  const validateLastName = (value: string) => {
    setLastName(value);
    setLastNameError(value.length === 0);
  };

  const validateAddress = (value: string) => {
    setAddress(value);
    setAddressError(value.length === 0);
  };

  return (
    <div className="flex flex-col flex-grow justify-between w-full">
      <div className="flex flex-col flex-grow justify-center gap-[1rem] pt-[2rem]">
        <div className="flex flex-col">
          <h6 className="font-normal">Filling up basic information</h6>
          <h3 className="font-semibold">What are your personal details?</h3>
        </div>
        <div className="flex flex-col flex-grow gap-[0.5rem]">
          <div className="flex flex-col gap-[.25rem]">
            <p>Email:</p>
            <Input
              value={email || ''}
              placeholder="youremail@example.com"
              onChange={(e) => validateEmail(e.target.value)}
              className={emailError ? 'ring-red-500 ring-2 ring-offset-2' : ''}
            />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Password:</p>
            <Input
              type="password"
              value={password || ''}
              placeholder="Min. 8 chars; A-Z, a-z; &^@!"
              onChange={(e) => validatePassword(e.target.value)}
              className={passwordError ? 'ring-red-500 ring-2 ring-offset-2' : ''}
            />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>First Name:</p>
            <Input
              value={firstName || ''}
              placeholder="Sam"
              onChange={(e) => validateFirstName(e.target.value)}
              className={firstNameError ? 'ring-red-500 ring-2 ring-offset-2' : ''}
            />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Last Name:</p>
            <Input
              value={lastName || ''}
              placeholder="Dacara"
              onChange={(e) => validateLastName(e.target.value)}
              className={lastNameError ? 'ring-red-500 ring-2 ring-offset-2' : ''}
            />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Sex:</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={'dropdown'} className="w-full flex justify-start">
                  {sex}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sex</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setSex('Male')}>Male</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSex('Female')}>Female</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSex('Hermaphrodite')}>Hermaphrodite</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Contact Number:</p>
            <Input value={contactNumber || ''} placeholder="09696969696" onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Clinic Address:</p>
            <Input
              value={address || ''}
              placeholder="St Joseph Hospital floor 3..."
              onChange={(e) => validateAddress(e.target.value)}
              className={addressError ? 'ring-red-500 ring-2 ring-offset-2' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
