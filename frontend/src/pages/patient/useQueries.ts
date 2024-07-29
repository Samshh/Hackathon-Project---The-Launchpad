
import axios from 'axios';
import { useQuery } from 'react-query';
import { PatientInfo } from './types';

export function useGetPatientInfoById(id: number) {
  return useQuery({
    queryKey: ['patientInfoById'],
    queryFn: async () => {
      const { data } = await axios.get(`http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/patient/${id}`);
      return data as PatientInfo;
    },
    staleTime: Infinity,
  });
}


export default function 


