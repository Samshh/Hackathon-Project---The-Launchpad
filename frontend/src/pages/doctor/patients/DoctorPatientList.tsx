import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from 'axios';
import { useQuery } from "react-query";
import { formatDistanceToNow } from "date-fns";
import { DoctorPatientItem as Patient, DoctorPatientItemResponseData } from "./types";

const fetchPatients = async () => {
  const response = await axios.get('http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/mypatientlist', {
    withCredentials: true
  });

  return response.data.data;
};

export default function DoctorPatientList() {
  const [searchParams, _] = useSearchParams();

  const [patients, setPatients] = useState<Patient[]>([]);
  useQuery("doctor-patient-list", fetchPatients, {
    enabled: true,
    onSuccess: (data: DoctorPatientItemResponseData[]) => {
      let newPatients: Patient[] = data.map((patient: DoctorPatientItemResponseData) => {
        return {
          ...patient,
          date: new Date(patient.date)
        };
      });

      setPatients(newPatients);
    }
  });

  const filteredPatients = useMemo(() => {
    if (!searchParams.has('name')) {
      return patients;
    }

    return patients.filter((patient) => patient.name.toLowerCase().includes(searchParams.get('name')!.toLowerCase()));
  }, [searchParams, patients]);

  return (
    <section className="flex-grow relative w-full flex flex-col justify-start items-stretch bg-white rounded-md shadow-md border border-gray-100 overflow-y-hidden">
      <Table className="overflow-y-hidden">
        <TableHeader className="sticky top-0 bg-white shadow-sm">
          <TableRow>
            <TableHead className="w-1/2 py-2 pl-8">Name</TableHead>
            <TableHead className="py-2">Sex</TableHead>
            <TableHead className="py-2">Age</TableHead>
            <TableHead className="py-2">Contact Number</TableHead>
            <TableHead className="py-2 pr-8">Last Appointment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto">
          {filteredPatients.map((patient: Patient) => (
            <TableRow
              key={`doctor-patient-${patient.patientId}`}
            >
              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.patientId}`} className="block w-full font-medium p-4 pl-8">
                  {patient.name}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.patientId}`} className="block w-full font-medium p-4">
                  {patient.sex}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.patientId}`} className="block w-full font-medium p-4">
                  {`${patient.age} years old`}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.patientId}`} className="block w-full font-medium p-4 pr-8">
                  {patient.contactNumber ?? "N/A"}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.patientId}`} className="block w-full font-medium p-4 pr-8">
                  {formatDistanceToNow(patient.date)} ago
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {filteredPatients.length === 0 && (
        <TableCaption className="flex-grow flex justify-center items-center">
          No patients found.
        </TableCaption>
      )}
    </section>
  )
}