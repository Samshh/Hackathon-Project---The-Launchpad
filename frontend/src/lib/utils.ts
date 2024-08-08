import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { isBefore, parse, set } from 'date-fns';
import { Appointment } from '@/components/patient/appointments/allAppointmentsColumns';
import { parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function areDatesEqual(date1: Date, date2: Date) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export function isEtaBeforeCurrent(etaDateTime: string) {
  const parsedDateTime = parse(etaDateTime, 'yyyy-MM-dd-HH-mm', new Date());
  const currentDateTime = new Date();
  return isBefore(currentDateTime, parsedDateTime);
}

export function sortAppointments(appointments: Appointment[]) {
  const b = appointments.sort((a, b) => {
    const dateA = parseISO(a.ETA);
    const dateB = parseISO(b.ETA);

    // Compare the dates
    return dateA.getTime() - dateB.getTime();
  });
  console.log(b);
  return b;
}

export function militaryTimeToDate(timeString: string) {
  const parsedTime = parse(timeString, 'HH:mm', new Date());

  // Get the current date
  const now = new Date();

  // Set the hours and minutes on the current date
  const dateWithTime = set(now, { hours: parsedTime.getHours(), minutes: parsedTime.getMinutes() });

  return dateWithTime;
}
