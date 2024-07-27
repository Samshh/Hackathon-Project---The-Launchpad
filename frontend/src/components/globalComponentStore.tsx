import React from 'react';
import { create } from 'zustand';

type GlobalComponentStoreValues = {
  isSheetOpen: boolean;
  isDialogOpen: boolean;
  sheetContent: React.ReactNode | null;
  dialogContent: React.ReactNode | null;
};

type GlobalComponentStoreActions = {
  toggleOpenSheet: (sheetContent: React.ReactNode) => void;
  toggleOpenDialog: (dialogContent: React.ReactNode) => void;
  closeSheet: () => void;
};

type GlobalComponentStore = GlobalComponentStoreActions & GlobalComponentStoreValues;

const globalSheetStoreDefaultValues: GlobalComponentStoreValues = {
  isSheetOpen: false,
  isDialogOpen: false,
  sheetContent: null,
  dialogContent: null,
};

export const useGlobalComponentStore = create<GlobalComponentStore>((set, get) => ({
  ...globalSheetStoreDefaultValues,
  toggleOpenSheet: (sheetContent) => set({ isSheetOpen: !get().isSheetOpen, sheetContent: sheetContent }),
  toggleOpenDialog: (dialogContent) => set({ isDialogOpen: !get().isDialogOpen, dialogContent: dialogContent }),
  closeSheet: () => set({ isSheetOpen: false }),
}));
