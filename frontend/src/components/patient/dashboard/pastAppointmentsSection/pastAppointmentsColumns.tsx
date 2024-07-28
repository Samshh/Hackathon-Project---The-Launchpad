import { ColumnDef } from '@tanstack/react-table';
import { Appointment } from '../../appointments/allAppointmentsColumns';
import { parse, format } from 'date-fns';
import { isEtaBeforeCurrent } from '@/lib/utils';

export const pastAppointmentsColumns: ColumnDef<Appointment>[] = [
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
    accessorKey: 'status',
    header: () => <p className="font-semibold text-black">Status</p>,
    cell: ({ row }) => {
      const status = row.original.status;
      const etaDateTime = row.original.ETA;

      if (status === 1) {
        if (isEtaBeforeCurrent(etaDateTime)) {
          return <p className={`w-min font-medium rounded-sm text-xs py-1 px-2 text-orange-500 bg-orange-200`}>Pending</p>;
        }
        return <p className={`w-min font-medium rounded-sm text-xs py-1 px-2 text-green-500 bg-green-200`}>Finished</p>;
      }

      return <p className={`w-min font-medium rounded-sm text-xs py-1 px-2 text-red-500 bg-red-200`}>Cancelled</p>;
    },
  },
  {
    accessorKey: 'doctor',
    header: () => <p className="font-semibold text-black">Doctor</p>,
    cell: ({ row }) => {
      const doctor = row.original.doctor;
      return (
        <div className="font-medium">
          <p>{doctor.name}</p>
        </div>
      );
    },
  },
];
