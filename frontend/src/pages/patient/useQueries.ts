
import axios from 'axios';
import { useQuery } from 'react-query';
import { PatientInfo } from './types';

export function useGetPatientInfoById(id: number) {
  return useQuery({
    queryKey: ['patientInfoById'],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_CANISTER_BE_ID}/get/patient/${id}`);
      return data as PatientInfo;
    },
    staleTime: Infinity,
  });
}