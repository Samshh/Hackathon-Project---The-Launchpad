import { ColumnDef } from '@tanstack/react-table';

type Doctor = {
  name: string;
  specialization: string;
};

export type PastAppointment = {
  doctor: Doctor;
  reason: string;
  date: string;
  time: string;
};

export const pastAppointmentsColumns: ColumnDef<PastAppointment>[] = [
  {
    accessorKey: 'doctor',
    header: () => <p className='font-semibold text-black'>Doctor</p>,
    cell: ({ row }) => {
      const doctor = row.original.doctor;
      return (
        <div className="space-y-1 font-medium">
            <p>{doctor.name}</p>
            <p className='text-gray-500'>{doctor.specialization}</p>
        </div>
      );
    },
  },
  {
    accessorKey: 'reason',
    header: () => <p className='font-semibold text-black'>Reason</p>,
  },
  {
    accessorKey: 'date',
    header: () => <p className='font-semibold text-black'>Date</p>,
  },
  {
    accessorKey: 'time',
    header: () => <p className='font-semibold text-black'>Time</p>,
  },
];
