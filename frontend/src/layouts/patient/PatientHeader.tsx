import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function PatientHeader() {
  return (
    <div className="flex items-center w-full gap-8 px-8 pt-6 pb-1">
      <div className="rounded-full size-12 bg-accent"></div>
      <input placeholder="Search for doctors..." className="flex-1 px-6 py-3 rounded-lg shadow-md"></input>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="grid bg-white border rounded-full size-12 border-accent place-items-center">
            <p className="text-lg font-semibold">H</p>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-48 mr-8 max-h-fit'>
          <DropdownMenuItem className='py-3 font-semibold hover:cursor-pointer'>Dashboard</DropdownMenuItem>
          <DropdownMenuItem className='py-3 font-semibold hover:cursor-pointer'>Appointments</DropdownMenuItem>
          <DropdownMenuItem className='py-3 font-semibold hover:cursor-pointer'>Doctors</DropdownMenuItem>
          <DropdownMenuItem className='py-3 font-semibold hover:cursor-pointer'>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
