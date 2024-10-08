import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table-custom';
import { Suspense } from 'react';
import { useGlobalComponentStore } from './globalComponentStore';
import { lazy } from 'react';
import { Appointment } from './patient/appointments/allAppointmentsColumns';

const LazyAppointmentSheetContent = lazy(() => import('./patient/appointments/AppointmentSheetContent'));

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

  const { toggleOpenSheet } = useGlobalComponentStore();

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
                  toggleOpenSheet(
                    LazyAppointmentSheetContent && (
                      <Suspense fallback={<div>Loading...</div>}>
                        <LazyAppointmentSheetContent appointment={row.original as Appointment} />
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
