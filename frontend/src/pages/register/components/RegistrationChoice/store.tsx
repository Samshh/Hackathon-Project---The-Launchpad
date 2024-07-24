import { create } from "zustand";

interface RegistrationChoiceStoreValues {
  step: number;
  accountType: 'patient' | 'doctor' | null;
}

interface RegistrationChoiceStoreActions {
  // setStep: (newStep: number) => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  setAccountType: (newAccountType: 'patient' | 'doctor' | null) => void;
  reset(): void;
}

type RegistrationChoiceStore = RegistrationChoiceStoreValues & RegistrationChoiceStoreActions;

const defaultValues: RegistrationChoiceStoreValues = {
  step: 0,
  accountType: null,
}

const useRegistrationChoiceStore = create<RegistrationChoiceStore>((set, get) => ({
  ...defaultValues,

  goToNextStep: () => {
    if (get().step < 2) {
      set({ step: get().step + 1 });
    } else {
      console.error('Cannot go to next step');
    }
  },

  goToPrevStep: () => {
    if (get().step > 0) {
      set({ step: get().step - 1 });
    } else {
      console.error('Cannot go to previous step');
    }
  },

  setAccountType: (newAccountType: 'patient' | 'doctor' | null) => set({ accountType: newAccountType }),
  
  reset: () => set(defaultValues),
}));

export default useRegistrationChoiceStore;