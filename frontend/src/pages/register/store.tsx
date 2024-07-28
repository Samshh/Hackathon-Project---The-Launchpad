import { create } from 'zustand';

interface RegistrationChoiceStoreValues {
  step: number;
  accountType: 'patient' | 'doctor' | null;
  email: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  sex: string | null;
  contactNumber: string | null;
  address?: string | null;
  birthday?: Date | null;
  department: string | null;
  specialization: string | null;
  finalButton: string | null;
}

interface RegistrationChoiceStoreActions {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  setAccountType: (newAccountType: 'patient' | 'doctor' | null) => void;
  reset: () => void;
  setEmail: (newEmail: string) => void;
  setPassword: (newPassword: string) => void;
  setFirstName: (newFirstName: string) => void;
  setLastName: (newLastName: string) => void;
  setSex: (newSex: string) => void;
  setContactNumber: (newContactNumber: string | null) => void;
  setAddress: (newAddress: string) => void;
  setBirthday: (newBirthday: string) => void;
  setDepartment: (newDepartment: string) => void;
  setSpecialization: (newSpecialization: string) => void;
  setFinalButton: (newFinalButton: string) => void;
}

type RegistrationChoiceStore = RegistrationChoiceStoreValues & RegistrationChoiceStoreActions;

const defaultValues: RegistrationChoiceStoreValues = {
  step: 0,
  accountType: null,
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  sex: 'Select',
  contactNumber: null,
  birthday: null,
  address: null,
  department: 'Select',
  specialization: null,
  finalButton: null,
};

const useRegistrationChoiceStore = create<RegistrationChoiceStore>((set, get) => ({
  ...defaultValues,

  setFinalButton: (newFinalButton: string) => {
    console.log('Setting final button:', newFinalButton);
    set({ finalButton: newFinalButton });
  },

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

  setEmail: (newEmail: string) => {
    console.log('Setting email:', newEmail);
    set({ email: newEmail });
  },

  setPassword: (newPassword: string) => {
    console.log('Setting password:', newPassword);
    set({ password: newPassword });
  },

  setFirstName: (newFirstName: string) => {
    console.log('Setting first name:', newFirstName);
    set({ firstName: newFirstName });
  },

  setLastName: (newLastName: string) => {
    console.log('Setting last name:', newLastName);
    set({ lastName: newLastName });
  },

  setSex: (newSex: string) => {
    console.log('Setting sex:', newSex);
    set({ sex: newSex });
  },

  setContactNumber: (newContactNumber: string | null) => {
    console.log('Setting contact number:', newContactNumber);
    set({ contactNumber: newContactNumber });
  },

  setAddress: (newAddress: string) => {
    console.log('Setting address:', newAddress);
    set({ address: newAddress });
  },

  setBirthday: (newBirthday: string) => {
    console.log('Setting birthday:', newBirthday);
    set({ birthday: newBirthday });
  },

  setDepartment: (newDepartment: string) => {
    console.log('Setting department:', newDepartment);
    set({ department: newDepartment });
  },

  setSpecialization: (newSpecialization: string) => {
    console.log('Setting specialization:', newSpecialization);
    set({ specialization: newSpecialization });
  },
}));

export default useRegistrationChoiceStore;
