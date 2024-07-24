import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function DoctorFinal() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('Select');
  const handleSelectedDepartment = (dept: string) => {
    setSelectedDepartment(dept);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col flex-grow justify-center gap-[1rem] pt-[2rem]">
        <div className="flex flex-col">
          <p className="text-lg">Filling up basic information</p>
          <h3 className="font-semibold">Can you provide your specialization?</h3>
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Department:</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'dropdown'} className="w-full flex justify-start">
                {selectedDepartment ? selectedDepartment : 'Department'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Department</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Anesthesiology')}>
                Anesthesiology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Pediatrics')}>Pediatrics</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Dermatology')}>Dermatology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Emergency medicine')}>
                Emergency medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Family medicine')}>
                Family medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Otolaryngology')}>
                Otolaryngology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Pathology')}>Pathology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Gastroenterology')}>
                Gastroenterology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Obstetrics and gynaecology')}>
                Obstetrics and gynaecology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Ophthalmology')}>
                Ophthalmology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Psychiatry')}>Psychiatry</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Surgery')}>Surgery</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Cardiology')}>Cardiology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Endocrinologists')}>
                Endocrinologists
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('General Internal Medicine')}>
                General Internal Medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Neurology')}>Neurology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Radiology')}>Radiology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Hematology')}>Hematology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Immunology')}>Immunology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Infectious diseases')}>
                Infectious diseases
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Rehabilitation medicine')}>
                Rehabilitation medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Anatomy')}>Anatomy</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Nephrology')}>Nephrology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectedDepartment('Radiation therapy')}>
                Radiation therapy
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Specialization:</p>
          <Input placeholder='Cardiology' />
        </div>
      </div>
    </div>
  );
}
