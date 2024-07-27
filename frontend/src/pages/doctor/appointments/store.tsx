import { startOfWeek } from "date-fns";
import { create } from "zustand";

interface AppointmentsValues {
  activeWeekFirstDay: Date;
}

interface AppointmentsActions {
  getActiveWeekLastDay(): Date;
  getActiveMonthYearText(): string;
  getActiveWeekDays(): Date[];
  goToPreviousWeek(): void;
  goToNextWeek(): void;
  reset(): void;
}

type AppointmentsStore = AppointmentsValues & AppointmentsActions;

const defaultValues: AppointmentsValues = {
  activeWeekFirstDay: startOfWeek(new Date()),
};

const useAppointmentsStore = create<AppointmentsStore>((set, get) => ({
  ...defaultValues,

  getActiveWeekLastDay: () => {
    const lastDay = new Date(get().activeWeekFirstDay);
    lastDay.setDate(lastDay.getDate() + 6);
    return lastDay;
  },

  getActiveMonthYearText: () => {
    const firstDay = get().activeWeekFirstDay;
    const lastDay = get().getActiveWeekLastDay();

    const firstMonth = firstDay.toLocaleString('en-US', { month: 'long' });
    const lastMonth = lastDay.toLocaleString('en-US', { month: 'long' });

    const firstYear = firstDay.getFullYear();
    const lastYear = lastDay.getFullYear();

    return `${firstMonth}${firstMonth === lastMonth ? '' : `${firstYear === lastYear ? '' : `${firstYear}`} - ${lastMonth}`} ${lastYear}`;
  },

  getActiveWeekDays: () => {
    const firstDay = get().activeWeekFirstDay;
    const days = [new Date(firstDay)];

    for (let i = 1; i < 7; i++) {
      const nextDay = new Date(firstDay);
      nextDay.setDate(nextDay.getDate() + i);
      days.push(nextDay);
    }

    return days;
  },

  goToPreviousWeek: () => {
    const activeWeekFirstDay = new Date(get().activeWeekFirstDay);
    activeWeekFirstDay.setDate(activeWeekFirstDay.getDate() - 7);
    set({ activeWeekFirstDay });
  },

  goToNextWeek: () => {
    const activeWeekFirstDay = new Date(get().activeWeekFirstDay);
    activeWeekFirstDay.setDate(activeWeekFirstDay.getDate() + 7);
    set({ activeWeekFirstDay });
  },

  reset: () => set(defaultValues),
}));

export default useAppointmentsStore;