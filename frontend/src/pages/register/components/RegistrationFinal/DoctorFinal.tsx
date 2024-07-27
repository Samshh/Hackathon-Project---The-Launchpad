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
import { useShallow } from 'zustand/react/shallow';
import useRegistrationChoiceStore from '../../store';

export default function DoctorFinal() {
  const [setDepartment, department, setSpecialization, specialization] = useRegistrationChoiceStore(
    useShallow((state) => [state.setDepartment, state.department, state.setSpecialization, state.specialization]),
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col flex-grow justify-center gap-[1rem] pt-[2rem]">
        <div className="flex flex-col">
          <h6 className="font-normal">Filling up professional information</h6>
          <h3 className="font-semibold">Can you provide your specialization?</h3>
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Department:</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'dropdown'} className="w-full flex justify-start">
                {department}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Department</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setDepartment('Anesthesiology')}>Anesthesiology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Pediatrics')}>Pediatrics</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Dermatology')}>Dermatology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Emergency medicine')}>
                Emergency medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Family medicine')}>Family medicine</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Otolaryngology')}>Otolaryngology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Pathology')}>Pathology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Gastroenterology')}>Gastroenterology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Obstetrics and gynaecology')}>
                Obstetrics and gynaecology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Ophthalmology')}>Ophthalmology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Psychiatry')}>Psychiatry</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Surgery')}>Surgery</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Cardiology')}>Cardiology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Endocrinologists')}>Endocrinologists</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('General Internal Medicine')}>
                General Internal Medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Neurology')}>Neurology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Radiology')}>Radiology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Hematology')}>Hematology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Immunology')}>Immunology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Infectious diseases')}>
                Infectious diseases
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Rehabilitation medicine')}>
                Rehabilitation medicine
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Anatomy')}>Anatomy</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Nephrology')}>Nephrology</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDepartment('Radiation therapy')}>Radiation therapy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-[.25rem]">
          <p>Specialization:</p>
          <Input
            value={specialization || ''}
            placeholder="Cardiology"
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
