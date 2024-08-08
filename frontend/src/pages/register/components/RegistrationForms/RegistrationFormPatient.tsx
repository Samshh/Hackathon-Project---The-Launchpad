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

export default function RegistrationFormPatient() {
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
    setBirthday,
    birthday,
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
      state.setBirthday,
      state.birthday,
    ]),
  );

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [birthdayError, setBirthdayError] = useState(false);

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

  const validateBirthday = (value: string) => {
    let formattedDate = value.replace(/\D/g, '');
    if (formattedDate.length > 4) {
      formattedDate = formattedDate.slice(0, 4) + '-' + formattedDate.slice(4);
    }
    if (formattedDate.length > 7) {
      formattedDate = formattedDate.slice(0, 7) + '-' + formattedDate.slice(7, 9);
    }
    setBirthday(formattedDate);

    const [year, month, day] = formattedDate.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const isValid =
      date &&
      date.getFullYear() === parseInt(year) &&
      date.getMonth() === parseInt(month) - 1 &&
      date.getDate() === parseInt(day) &&
      date <= new Date();

    setBirthdayError(!isValid);
  };

  return (
    <div className="flex flex-col flex-grow justify-between ">
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
            <p>Date of Birth:</p>
            <Input
              value={birthday || ''}
              placeholder="YYYY-MM-DD"
              onChange={(e) => validateBirthday(e.target.value)}
              className={birthdayError ? 'ring-red-500 ring-2 ring-offset-2' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
