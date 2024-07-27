import React from 'react';
import { create } from 'zustand';

type GlobalSheetValues = {
  isOpen: boolean;
  content: React.ReactNode | null;
};

type GlobalSheetActions = {
  toggleOpen: (content: React.ReactNode) => void;
};

type GlobalSheetStore = GlobalSheetActions & GlobalSheetValues;

const globalSheetStoreDefaultValues: GlobalSheetValues = {
  isOpen: false,
  content: null,
};

export const useGlobalSheetStore = create<GlobalSheetStore>((set, get) => ({
  ...globalSheetStoreDefaultValues,
  toggleOpen: (content) => set({ isOpen: !get().isOpen, content: content }),
}));
