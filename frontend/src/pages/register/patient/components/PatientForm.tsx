import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PatientForm() {
  const [selectedGender, setSelectedGender] = useState<string>("Male");

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <div className="flex flex-col justify-between pl-[3.5rem] h-full">
      <div className="flex flex-col gap-[1rem] h-full pt-[2rem]">
        <div className="flex flex-col justify-center gap-[1rem] h-full">
          <div className="flex flex-col">
            <p className="text-lg">Filling up basic information</p>
            <h3 className="font-semibold">What are your personal details?</h3>
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
            <p>Gender:</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={"gender"} className="w-full flex justify-start">
                  {selectedGender ? selectedGender : "Gender"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sex</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleGenderSelect("Male")}>
                  Male
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleGenderSelect("Female")}>
                  Female
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleGenderSelect("Hermaphrodite")}>
                  Hermaphrodite
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col gap-[.25rem]">
            <p>Email:</p>
            <Input placeholder="youremail@example.com" />
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
    </div>
  );
}
