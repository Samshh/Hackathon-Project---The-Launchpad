import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';

type Doctor = {
  name: string;
  specialization: string;
};

export type PastAppointment = {
  doctor: Doctor;
  status: 0 | 1;
  note: string;
  ETA: string;
};

export const pastAppointmentsColumns: ColumnDef<PastAppointment>[] = [
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
    accessorKey: 'status',
    header: () => <p className="font-semibold text-black">Status</p>,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <p
          className={`w-min font-medium rounded-md py-1 px-2 ${status === 0 ? 'text-red-500 bg-red-200' : 'text-green-500 bg-green-200'}`}
        >
          {status === 0 ? 'Cancelled' : 'Finished'}
        </p>
      );
    },
  },
  {
    accessorKey: 'note',
    header: () => <p className="font-semibold text-black">Your note</p>,
    cell: ({ row }) => {
      const note = row.original.note;
      return (
        <p className="break-words w-min line-clamp-2">{note}</p>
      );
    },
  },
  {
    accessorKey: 'ETA',
    header: () => <p className="font-semibold text-black">ETA</p>,
  },
];
