import { ColumnDef } from '@tanstack/react-table';

type Doctor = {
  name: string;
  specialization: string;
  image: 'https://www.mukathospital.com/wp-content/uploads/2023/07/Get-an-Appointment-with-the-Best-Heart-Doctor-Cardiologist-in-Chandigarh.jpg';
};

export type YourDoctor = {
  doctor: Doctor;
  contact: string;
  email: string;
  address: string;
};

export const yourDoctorsColumns: ColumnDef<YourDoctor>[] = [

  {
    accessorKey: 'doctor',
    header: () => <p className="font-semibold text-black">Doctor</p>,
    cell: ({ row }) => {
      const doctor = row.original.doctor;
      return (
        <div className="space-y-1 font-medium">
          <p>{doctor.name}</p>
          <p className="text-gray-500">{doctor.specialization}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'contact',
    header: () => <p className="font-semibold text-black">Contact</p>,
  },
  {
    accessorKey: 'email',
    header: () => <p className="font-semibold text-black">E-mail</p>,
  },
  {
    accessorKey: 'address',
    header: () => <p className="font-semibold text-black">Address</p>,
  },
];
