import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

const patients = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    sex: "Male",
    age: "18 years, 6 months",
    contactNumber: "09123456789",
    lastAppointment: "1 day ago"
  },
  {
    id: 2,
    name: "Maria Santos",
    sex: "Female",
    age: "25 years, 2 months",
    contactNumber: "09876543210",
    lastAppointment: "2 days ago"
  },
  {
    id: 3,
    name: "John Smith",
    sex: "Male",
    age: "30 years, 1 month",
    contactNumber: "09123456789",
    lastAppointment: "3 days ago"
  },
  {
    id: 4,
    name: "Jane Doe",
    sex: "Female",
    age: "40 years, 5 months",
    contactNumber: "09876543210",
    lastAppointment: "4 days ago"
  },
  {
    id: 5,
    name: "Sarah Johnson",
    sex: "Female",
    age: "35 years, 3 months",
    contactNumber: "09123456789",
    lastAppointment: "5 days ago"
  },
  {
    id: 6,
    name: "Michael Brown",
    sex: "Male",
    age: "45 years, 9 months",
    contactNumber: "09876543210",
    lastAppointment: "6 days ago"
  },
  {
    id: 7,
    name: "Emily Davis",
    sex: "Female",
    age: "28 years, 4 months",
    contactNumber: "09123456789",
    lastAppointment: "7 days ago"
  },
  {
    id: 8,
    name: "Daniel Wilson",
    sex: "Male",
    age: "32 years, 7 months",
    contactNumber: "09876543210",
    lastAppointment: "8 days ago"
  },
  {
    id: 9,
    name: "Olivia Martinez",
    sex: "Female",
    age: "22 years, 1 month",
    contactNumber: "09123456789",
    lastAppointment: "9 days ago"
  },
  {
    id: 10,
    name: "Alex Johnson",
    sex: "Male",
    age: "27 years, 3 months",
    contactNumber: "09123456789",
    lastAppointment: "10 days ago"
  },
  {
    id: 11,
    name: "Sophia Davis",
    sex: "Female",
    age: "31 years, 8 months",
    contactNumber: "09876543210",
    lastAppointment: "11 days ago"
  },
  {
    id: 12,
    name: "Ethan Wilson",
    sex: "Male",
    age: "29 years, 2 months",
    contactNumber: "09123456789",
    lastAppointment: "12 days ago"
  },
  {
    id: 13,
    name: "Isabella Martinez",
    sex: "Female",
    age: "23 years, 7 months",
    contactNumber: "09876543210",
    lastAppointment: "13 days ago"
  },
  {
    id: 14,
    name: "Liam Johnson",
    sex: "Male",
    age: "33 years, 4 months",
    contactNumber: "09123456789",
    lastAppointment: "14 days ago"
  },
  {
    id: 15,
    name: "Ava Davis",
    sex: "Female",
    age: "26 years, 9 months",
    contactNumber: "09876543210",
    lastAppointment: "15 days ago"
  },
  {
    id: 16,
    name: "Noah Wilson",
    sex: "Male",
    age: "30 years, 3 months",
    contactNumber: "09123456789",
    lastAppointment: "16 days ago"
  },
  {
    id: 17,
    name: "Mia Martinez",
    sex: "Female",
    age: "24 years, 8 months",
    contactNumber: "09876543210",
    lastAppointment: "17 days ago"
  },
  {
    id: 18,
    name: "William Johnson",
    sex: "Male",
    age: "34 years, 5 months",
    contactNumber: "09123456789",
    lastAppointment: "18 days ago"
  },
  {
    id: 19,
    name: "Charlotte Davis",
    sex: "Female",
    age: "27 years, 10 months",
    contactNumber: "09876543210",
    lastAppointment: "19 days ago"
  }
];

export default function DoctorPatientList() {
  const [searchParams, _] = useSearchParams();

  const filteredPatients = useMemo(() => {
    if (!searchParams.has('name')) {
      return patients;
    }

    return patients.filter((patient) => patient.name.toLowerCase().includes(searchParams.get('name')!.toLowerCase()));
  }, [searchParams]);
  
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
          {filteredPatients.map((patient) => (
            <TableRow 
              key={`doctor-patient-${patient.id}`}
            >
              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.id}`} className="block w-full font-medium p-4 pl-8">
                  {patient.name}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.id}`} className="block w-full font-medium p-4">
                  {patient.sex}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.id}`} className="block w-full font-medium p-4">
                  {patient.age}
                </Link>
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.id}`} className="block w-full font-medium p-4 pr-8">
                  {patient.contactNumber}
                </Link>                
              </TableCell>

              <TableCell className="p-0">
                <Link to={`/doctor/patients/${patient.id}`} className="block w-full font-medium p-4 pr-8">
                  {patient.lastAppointment}
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