import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table-custom';
import { Suspense } from 'react';
import { useGlobalSheetStore } from './store';
import { lazy } from 'react';
import { PastAppointment } from './patient/appointments/allAppointmentsColumns';

const AppointmentListItem = lazy(() => import('./patient/appointments/AppointmentListItem'));

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  type?: 'doctor' | 'patientAppointment';
}

export function DataTable<TData, TValue>({ columns, data, type }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { toggleOpen } = useGlobalSheetStore();

  return (
    <Table wrapperClassName="overflow-clip">
      <TableHeader className="sticky top-0 bg-white">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              className="hover:cursor-pointer"
              onClick={() => {
                if (type === 'patientAppointment') {
                  toggleOpen(
                    AppointmentListItem && (
                      <Suspense fallback={<div>Loading...</div>}>
                        <AppointmentListItem appointment={row.original as PastAppointment} />
                      </Suspense>
                    ),
                  );
                }
              }}
              data-state={row.getIsSelected() && 'selected'}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell className="p-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
