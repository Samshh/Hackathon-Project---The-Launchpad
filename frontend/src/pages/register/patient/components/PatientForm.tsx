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
import { useNavigate } from "react-router-dom";

export default function PatientForm() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState<string>("Male");

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const toNext = () => {
    console.log("empty");
  };

  const returnPrev = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col justify-between pl-[3.5rem] h-full">
      <div className="flex justify-between items-center h-[3rem] top-0">
        <p className="text-lg font-semibold">Registration</p>
        <p className="text-lg font-light">Step 2 of 3</p>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <div className="flex flex-col">
          <p className="text-lg">Filling up basic information</p>
          <p className="font-semibold text-3xl">What are your personal details?</p>
        </div>
        <div className="flex flex-col gap-[1rem]">
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
                <Button variant={"outline"} className="w-full flex justify-start">
                  {selectedGender ? selectedGender : "Gender"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Gender</DropdownMenuLabel>
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
        <div className="flex justify-end gap-[1rem] bottom-0">
          <Button variant={"outline"} onClick={returnPrev}>
            Back
          </Button>
          <Button onClick={toNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
