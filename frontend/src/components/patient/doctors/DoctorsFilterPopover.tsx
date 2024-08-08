import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Filter } from 'lucide-react';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import { useShallow } from 'zustand/react/shallow';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

const departments = [
  'Anesthesiology',
  'Pediatrics',
  'Dermatology',
  'Emergency Medicine',
  'Family Medicine',
  'Otolaryngology',
  'Pathology',
  'Gastroenterology',
  'Obstretrics and Gynecology',
  'Ophthalmology',
  'Psychiatry',
  'Surgery',
  'Cardiology',
  'Endocrinologists',
  'General Internal Medicine',
  'Neurology',
  'Radiology',
  'Hematology',
  'Immunology',
  'Infectious Diseases',
  'Rehabilitation Medicine',
  'Anatomy',
  'Nephrology',
  'Radiation Therapy',
];

export default function DoctorsFilterPopover() {
  const [
    selectedDoctorFilters,
    addSelectedDoctorFilter,
    removeSelectedDoctorFilter,
    isDoctorFilterPopoverOpen,
    toggleDoctorFilterPopover,
    closeDoctorFilterPopover,
  ] = useGlobalComponentStore(
    useShallow((state) => [
      state.selectedDoctorFilters,
      state.addSelectedDoctorFilter,
      state.removeSelectedDoctorFilter,
      state.isDoctorFilterPopoverOpen,
      state.toggleDoctorFilterPopover,
      state.closeDoctorFilterPopover,
    ]),
  );

  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const location = useLocation();

  return (
    <Popover open={isDoctorFilterPopoverOpen} onOpenChange={() => toggleDoctorFilterPopover()}>
      <PopoverTrigger className="flex items-center gap-2 px-4 py-2 text-white rounded-full bg-accent">
        <p className="font-medium">Filter</p>
        <Filter className="size-5" strokeWidth={1} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-[800px] gap-3 ml-[200px]">
        <p className="text-lg font-medium">Select a department</p>
        <div className="flex flex-wrap">
          {departments.map((department, i) => {
            return (
              <div
                onClick={() => {
                  if (!selectedDoctorFilters.includes(department)) {
                    addSelectedDoctorFilter(department);
                  } else {
                    removeSelectedDoctorFilter(department);
                  }
                }}
                key={i}
                className={`px-3 py-2 m-1 border rounded-full hover:cursor-pointer ${selectedDoctorFilters.includes(department) ? 'bg-accent text-white border-white' : 'bg-white text-black border-gray-400'} hover:bg-accent/20`}
              >
                {department}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set('departments', selectedDoctorFilters.join(',').toLowerCase());
            navigate(`${location.pathname}?${newSearchParams.toString()}`);
            // if (selectedDoctorFilters.length !== 0) {
            // } else {
            //   navigate(`/patient/doctors`);
            // }
            closeDoctorFilterPopover();
          }}
          className="w-full py-2 mt-2 font-medium text-white rounded-full bg-accent"
        >
          Filter
        </button>
      </PopoverContent>
    </Popover>
  );
}
