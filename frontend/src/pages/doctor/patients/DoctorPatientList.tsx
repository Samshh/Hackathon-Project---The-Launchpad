import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const patients = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    sex: "Male",
    age: "18 years, 6 months",
    contactNumber: "09123456789"
  },
  {
    id: 2,
    name: "Maria Santos",
    sex: "Female",
    age: "42 years, 0 months",
    contactNumber: "09123456789"
  },
  {
    id: 3,
    name: "Jojo Binay",
    sex: "Male",
    age: "3 years, 3 months",
    contactNumber: "09123456789"
  },
  {
    id: 4,
    name: "Raul Aquino",
    sex: "Male",
    age: "78 years, 9 months",
    contactNumber: "09123456789"
  },        
  {
    id: 5,
    name: "John Doe",
    sex: "Male",
    age: "30 years, 4 months",
    contactNumber: "09123456789"
  },
  {
    id: 6,
    name: "Jane Smith",
    sex: "Female",
    age: "25 years, 9 months",
    contactNumber: "09123456789"
  },
  {
    id: 7,
    name: "Michael Johnson",
    sex: "Male",
    age: "45 years, 2 months",
    contactNumber: "09123456789"
  },
  {
    id: 8,
    name: "Emily Davis",
    sex: "Female",
    age: "35 years, 7 months",
    contactNumber: "09123456789"
  },
  {
    id: 9,
    name: "David Wilson",
    sex: "Male",
    age: "50 years, 11 months",
    contactNumber: "09123456789"
  },
  {
    id: 10,
    name: "Sarah Thompson",
    sex: "Female",
    age: "28 years, 3 months",
    contactNumber: "09123456789"
  },
  {
    id: 11,
    name: "Christopher Martinez",
    sex: "Male",
    age: "32 years, 6 months",
    contactNumber: "09123456789"
  },
  {
    id: 12,
    name: "Olivia Anderson",
    sex: "Female",
    age: "39 years, 1 month",
    contactNumber: "09123456789"
  },
  {
    id: 13,
    name: "Daniel Taylor",
    sex: "Male",
    age: "41 years, 8 months",
    contactNumber: "09123456789"
  },
  {
    id: 14,
    name: "Sophia Thomas",
    sex: "Female",
    age: "27 years, 5 months",
    contactNumber: "09123456789"
  },
  {
    id: 15,
    name: "Matthew Hernandez",
    sex: "Male",
    age: "36 years, 10 months",
    contactNumber: "09123456789"
  },
  {
    id: 16,
    name: "Ava Wilson",
    sex: "Female",
    age: "33 years, 2 months",
    contactNumber: "09123456789"
  },
  {
    id: 17,
    name: "Andrew Thompson",
    sex: "Male",
    age: "47 years, 7 months",
    contactNumber: "09123456789"
  },
  {
    id: 18,
    name: "Isabella Davis",
    sex: "Female",
    age: "31 years, 9 months",
    contactNumber: "09123456789"
  },
  {
    id: 19,
    name: "Joseph Johnson",
    sex: "Male",
    age: "43 years, 3 months",
    contactNumber: "09123456789"
  },
  {
    id: 20,
    name: "Mia Smith",
    sex: "Female",
    age: "29 years, 6 months",
    contactNumber: "09123456789"
  },
  {
    id: 21,
    name: "Ethan Martinez",
    sex: "Male",
    age: "38 years, 0 months",
    contactNumber: "09123456789"
  },
  {
    id: 22,
    name: "Charlotte Anderson",
    sex: "Female",
    age: "34 years, 4 months",
    contactNumber: "09123456789"
  },
  {
    id: 23,
    name: "Alexander Taylor",
    sex: "Male",
    age: "49 years, 11 months",
    contactNumber: "09123456789"
  },
  {
    id: 24,
    name: "Amelia Thomas",
    sex: "Female",
    age: "26 years, 8 months",
    contactNumber: "09123456789"
  }
];

export default function DoctorPatientList() {
  const navigate = useNavigate();
  
  return (
    <section className="flex-grow relative w-full flex flex-col justify-start items-stretch bg-white rounded-md shadow-md border border-gray-100 overflow-y-hidden">
      <Table className="overflow-y-hidden">
        <TableHeader className="sticky top-0 bg-white shadow-sm">
          <TableRow>
            <TableHead className="w-1/2 py-2 pl-8">Name</TableHead>
            <TableHead className="py-2">Sex</TableHead>
            <TableHead className="py-2">Age</TableHead>
            <TableHead className="py-2 pr-8">Contact Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto">
          {patients.map((patient) => (
            <TableRow 
              key={`doctor-patient-${patient.id}`}
              className="cursor-pointer"
              onClick={() => navigate(`/doctor/patients/${patient.id}`)}
            >
              <TableCell className="font-medium pl-8">{patient.name}</TableCell>
              <TableCell>{patient.sex}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell className="pr-8">{patient.contactNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}