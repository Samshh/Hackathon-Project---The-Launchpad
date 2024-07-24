import { useState } from 'react';
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
// import useRegistrationChoiceStore from "../../register/components/RegistrationChoice/store";

export default function RegistrationFormPatient() {
  const [selectedGender, setSelectedGender] = useState<string>('Male');
  // const accountType = useRegistrationChoiceStore((state) => state.accountType);
  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col flex-grow justify-center gap-[1rem] pt-[2rem]">
        <div className="flex flex-col">
          <p className="text-lg">Filling up basic information</p>
          <h3 className="font-semibold">What are your personal details?</h3>
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Email:</p>
          <Input placeholder="youremail@example.com" />
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Password:</p>
          <Input placeholder="Min. 8 chars; A-Z, a-z; &^@!" />
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>First Name:</p>
          <Input placeholder="Sam" />
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Last Name:</p>
          <Input placeholder="Dacara" />
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Sex:</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'dropdown'} className="w-full flex justify-start">
                {selectedGender ? selectedGender : 'Gender'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sex</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleGenderSelect('Male')}>Male</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleGenderSelect('Female')}>Female</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleGenderSelect('Hermaphrodite')}>Hermaphrodite</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Contact Number:</p>
          <Input placeholder="09696969696" />
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Date of Birth:</p>
          <Input placeholder="September 4, 2003" />
        </div>
      </div>
    </div>
  );
}
