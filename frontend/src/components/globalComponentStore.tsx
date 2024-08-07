import React from 'react';
import { create } from 'zustand';
import { CalendarFloatingTimeBlock } from '@/components/WeeklyCalendar/types';

type GlobalComponentStoreValues = {
  isSheetOpen: boolean;
  isDialogOpen: boolean;
  sheetContent: React.ReactNode | null;
  dialogContent: React.ReactNode | null;
  selectedDoctorFilters: string[];
  isDoctorFilterPopoverOpen: boolean;
  patientSelectedBookingSchedule: CalendarFloatingTimeBlock | null;
};

type GlobalComponentStoreActions = {
  toggleOpenSheet: (sheetContent: React.ReactNode) => void;
  toggleOpenDialog: (dialogContent: React.ReactNode) => void;
  closeDialog: () => void;
  closeSheet: () => void;
  addSelectedDoctorFilter: (department: string) => void;
  removeSelectedDoctorFilter: (department: string) => void;
  toggleDoctorFilterPopover: () => void;
  closeDoctorFilterPopover: () => void;
  setPatientSelectedBookingSchedule: (selectedTimeBlock: CalendarFloatingTimeBlock) => void;
  resetPatientSelectedBookingSchedule: () => void;
};

type GlobalComponentStore = GlobalComponentStoreActions & GlobalComponentStoreValues;

const globalSheetStoreDefaultValues: GlobalComponentStoreValues = {
  isSheetOpen: false,
  isDialogOpen: false,
  sheetContent: null,
  dialogContent: null,
  selectedDoctorFilters: [],
  isDoctorFilterPopoverOpen: false,
  patientSelectedBookingSchedule: null,
};

export const useGlobalComponentStore = create<GlobalComponentStore>((set, get) => ({
  ...globalSheetStoreDefaultValues,
  toggleOpenSheet: (sheetContent) => set({ isSheetOpen: !get().isSheetOpen, sheetContent: sheetContent }),
  toggleOpenDialog: (dialogContent) => set({ isDialogOpen: !get().isDialogOpen, dialogContent: dialogContent }),
  closeSheet: () => set({ isSheetOpen: false }),
  addSelectedDoctorFilter: (department) => set({ selectedDoctorFilters: [...get().selectedDoctorFilters, department] }),
  removeSelectedDoctorFilter: (department) =>
    set({ selectedDoctorFilters: get().selectedDoctorFilters.filter((dept) => dept !== department) }),
  toggleDoctorFilterPopover: () => set({ isDoctorFilterPopoverOpen: !get().isDoctorFilterPopoverOpen }),
  closeDoctorFilterPopover: () => set({ isDoctorFilterPopoverOpen: false }),
  closeDialog: () => set({ isDialogOpen: false }),
  setPatientSelectedBookingSchedule: (timeBlock) => set({ patientSelectedBookingSchedule: timeBlock }),
  resetPatientSelectedBookingSchedule: () => set({ patientSelectedBookingSchedule: null }),
}));
