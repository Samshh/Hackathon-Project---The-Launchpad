import { ColumnDef } from '@tanstack/react-table';

type Doctor = {
  name: string;
  specialization: string;
};

export type PastAppointment = {
  doctor: Doctor;
  status: 0 | 1;
  note: string;
  ETA: string; //YYYY-MM-DD-HH-mm
  diagnosis: string;
  prescription: string;
};

export const allAppointmentsColumns: ColumnDef<PastAppointment>[] = [
  {
    accessorKey: 'doctor',
    header: () => <p className="font-semibold text-black">Doctor</p>,
    cell: ({ row }) => {
      const doctor = row.original.doctor;
      return (
        <div className="py-6 space-y-1 font-medium">
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
          className={`  w-min font-medium rounded-md py-1 px-2 ${status === 0 ? 'text-red-500 bg-red-200' : 'text-green-500 bg-green-200'}`}
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
      return <p className="w-[200px]">{note}</p>;
    },
  },
  {
    accessorKey: 'ETA',
    header: () => <p className="font-semibold text-black">Date</p>,
    cell: ({row}) => {
      const date = row.original.ETA.split('-').slice(0,3).join('-')
      return <p>{date}</p>
    }
  },
  {
    accessorKey: 'ETA',
    header: () => <p className="font-semibold text-black">ETA</p>,
    cell: ({row}) => {
      const time = row.original.ETA.split('-').slice(3).join(':')
      return <p>{time}</p>
    }
  },
  {
    accessorKey: 'diagnosis',
    header: () => <p className="font-semibold text-black">Diagnosis</p>,
    cell: ({ row }) => {
      const diagnosis = row.original.diagnosis;
      return <p className="w-[200px]">{diagnosis}</p>;
    },
  },
  {
    accessorKey: 'prescription',
    header: () => <p className="font-semibold text-black">Prescription</p>,
    cell: ({ row }) => {
      const prescription = row.original.prescription;
      return <p className="w-[200px]">{prescription}</p>;
    },
  },
];
