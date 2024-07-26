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

  return (
    <div className="flex flex-col flex-grow justify-between ">
      <div className="flex flex-col flex-grow justify-center gap-[1rem] pt-[2rem]">
        <div className="flex flex-col">
          <h6 className="font-normal">Filling up basic information</h6>
          <h3 className="font-semibold">What are your personal details?</h3>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-[.25rem]">
            <p>Email:</p>
            <Input value={email || ''} placeholder="youremail@example.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Password:</p>
            <Input
              type="password"
              value={password || ''}
              placeholder="Min. 8 chars; A-Z, a-z; &^@!"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>First Name:</p>
            <Input value={firstName || ''} placeholder="Sam" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Last Name:</p>
            <Input value={lastName || ''} placeholder="Dacara" onChange={(e) => setLastName(e.target.value)} />
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
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
