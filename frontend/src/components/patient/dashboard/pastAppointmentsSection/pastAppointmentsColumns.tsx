import { ColumnDef } from '@tanstack/react-table';
import { PastAppointment } from '../../appointments/allAppointmentsColumns';
import { parse, format } from 'date-fns';
import { isEtaBeforeCurrent } from '@/lib/utils';

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
    header: () => <p className="font-semibold text-black">Note to doctor</p>,
    cell: ({ row }) => {
      const note = row.original.note;
      return <p className="break-words w-[200px] line-clamp-2">{note}</p>;
    },
  },
  {
    accessorKey: 'ETA',
    header: () => <p className="font-semibold text-black">Date</p>,
    cell: ({ row }) => {
      const date = row.original.ETA.split('-').slice(0, 3).join('-');
      const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
      const formattedDate = format(parsedDate, 'MMMM d, yyyy');
      return <p>{formattedDate}</p>;
    },
  },
];
