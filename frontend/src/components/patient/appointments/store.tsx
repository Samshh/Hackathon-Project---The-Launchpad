import { create } from 'zustand';

type AppointmentsValues = {
  isOpen: boolean;
};

type AppointmentsActions = {
  toggleOpen: () => void;
};

type AppointmentsStore = AppointmentsActions & AppointmentsValues;

const appointmentsStoreDefaultValues: AppointmentsValues = {
  isOpen: false,
};

export const useAppointmentsStore = create<AppointmentsStore>((set, get) => ({
  ...appointmentsStoreDefaultValues,
  toggleOpen: () => set({ isOpen: !get().isOpen }),
}));
