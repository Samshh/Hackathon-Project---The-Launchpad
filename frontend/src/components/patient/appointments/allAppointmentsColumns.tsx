import { ColumnDef } from '@tanstack/react-table';
import { parse, format } from 'date-fns';
import { isEtaBeforeCurrent } from '@/lib/utils';

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
      const etaDateTime = row.original.ETA;

      if (status === 1) {
        if (isEtaBeforeCurrent(etaDateTime)) {
          return <p className={`w-min font-medium rounded-md py-1 px-2 text-orange-500 bg-orange-200`}>Pending</p>;
        }
        return <p className={`w-min font-medium rounded-md py-1 px-2 text-green-500 bg-green-200`}>Finished</p>;
      }

      return <p className={`w-min font-medium rounded-md py-1 px-2 text-red-500 bg-red-200`}>Cancelled</p>;
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
    accessorKey: 'eta-date',
    header: () => <p className="font-semibold text-black">Date</p>,
    cell: ({ row }) => {
      const date = row.original.ETA.split('-').slice(0, 3).join('-');
      const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
      const formattedDate = format(parsedDate, 'MMMM d, yyyy');
      return <p>{formattedDate}</p>;
    },
  },
  {
    accessorKey: 'eta-time',
    header: () => <p className="font-semibold text-black">ETA</p>,
    cell: ({ row }) => {
      const militaryTime = row.original.ETA.split('-').slice(3).join(':');
      const parsedTime = parse(militaryTime, 'HH:mm', new Date());
      const formattedTime = format(parsedTime, 'h:mm a');
      return <p>{formattedTime}</p>;
    },
  },
  {
    accessorKey: 'diagnosis',
    header: () => <p className="font-semibold text-black">Diagnosis</p>,
    cell: ({ row }) => {
      const diagnosis = row.original.diagnosis;
      const status = row.original.status;
      const isEtaBeforeCurr = isEtaBeforeCurrent(row.original.ETA);
      return <p className="w-[200px]">{status === 1 && !isEtaBeforeCurr && diagnosis}</p>;
    },
  },
  {
    accessorKey: 'prescription',
    header: () => <p className="font-semibold text-black">Prescription</p>,
    cell: ({ row }) => {
      const prescription = row.original.prescription;
      const status = row.original.status;
      const isEtaBeforeCurr = isEtaBeforeCurrent(row.original.ETA);
      return <p className="w-[200px]">{status === 1 && !isEtaBeforeCurr && prescription}</p>;
    },
  },
];
