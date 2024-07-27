import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import DoctorPatientDetailItem from "./DoctorPatientDetailItem";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { isAfter } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const patient = {
  id: 1,
  name: "Juan Dela Cruz",
  sex: "Male",
  age: "18 years, 6 months",
  email: "jdcruz@gmail.com",
  contactNumber: "09123456789",
  lastAppointment: "1 day ago",
};

const patientAppointments = [
  {
    id: 1,
    eta: new Date(2024, 0, 1, 9, 0, 0),
    status: 0
  },
  {
    id: 2,
    eta: new Date(2024, 6, 31, 10, 0, 0),
    status: 1
  },
  {
    id: 3,
    eta: new Date(2024, 4, 3, 11, 0, 0),
    status: 0
  },
  {
    id: 4,
    eta: new Date(2024, 3, 4, 12, 0, 0),
    status: 1
  },
  {
    id: 5,
    eta: new Date(2024, 5, 5, 13, 0, 0),
    status: 0
  },
  {
    id: 2,
    eta: new Date(2024, 6, 31, 10, 0, 0),
    status: 1
  },
  {
    id: 3,
    eta: new Date(2024, 4, 3, 11, 0, 0),
    status: 0
  },
  {
    id: 4,
    eta: new Date(2024, 3, 4, 12, 0, 0),
    status: 1
  },
  {
    id: 5,
    eta: new Date(2024, 5, 5, 13, 0, 0),
    status: 0
  },
  {
    id: 2,
    eta: new Date(2024, 6, 31, 10, 0, 0),
    status: 1
  },
  {
    id: 3,
    eta: new Date(2024, 4, 3, 11, 0, 0),
    status: 0
  },
  {
    id: 4,
    eta: new Date(2024, 3, 4, 12, 0, 0),
    status: 1
  },
  {
    id: 5,
    eta: new Date(2024, 5, 5, 13, 0, 0),
    status: 0
  }
];

const prescriptions = [
  "Paracetamol 500mg, 1 tablet every 4 hours",
  "Amoxicillin 500mg, 1 tablet every 8 hours",
  "Ibuprofen 200mg, 1 tablet every 6 hours",
  "Loratadine 10mg, 1 tablet every 12 hours",
  "Cetirizine 10mg, 1 tablet every 12 hours",
  "Ascorbic Acid 500mg, 1 tablet once a day",
  "Paracetamol 500mg, 1 tablet every 4 hours",
  "Amoxicillin 500mg, 1 tablet every 8 hours",
  "Ibuprofen 200mg, 1 tablet every 6 hours",
  "Loratadine 10mg, 1 tablet every 12 hours",
  "Cetirizine 10mg, 1 tablet every 12 hours",
  "Ascorbic Acid 500mg, 1 tablet once a day",
  "Paracetamol 500mg, 1 tablet every 4 hours",
  "Amoxicillin 500mg, 1 tablet every 8 hours",
  "Ibuprofen 200mg, 1 tablet every 6 hours",
  "Loratadine 10mg, 1 tablet every 12 hours",
  "Cetirizine 10mg, 1 tablet every 12 hours",
  "Ascorbic Acid 500mg, 1 tablet once a day",
]

export default function DoctorPatientDetails() {
  const { patientId } = useParams();
  const [currentTab, setCurrentTab] = useState('appointments');

  return (
    <div className="flex-grow flex flex-col justify-start items-stretch pt-4 gap-4">
      <div className="flex-grow flex flex-row justify-start items-stretch gap-4">
        <div className="w-80 flex flex-col justify-start items-stretch gap-6 bg-white rounded-md shadow-md border border-gray-200 px-6 py-4">
          <div className="flex flex-row justify-start items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-300" />

            <div className="flex flex-col justify-start items-start">
              <h6>{patient.name}</h6>
              <p className="text-gray-500 text-sm">Last appointment {patient.lastAppointment}</p>
            </div>
          </div>

          <hr className="bg-gray-100" />

          <div className="flex-grow flex flex-col justify-start items-stretch gap-4">
            <DoctorPatientDetailItem label="Sex" value={patient.sex} />
            <DoctorPatientDetailItem label="Age" value={patient.age} />
            <DoctorPatientDetailItem label="Email" value={patient.email} />
            <DoctorPatientDetailItem label="Contact Number" value={patient.contactNumber} />
          </div>
        </div>

        <Tabs 
          onValueChange={(value) => setCurrentTab(value)}
          defaultValue="appointments" 
          className="flex-grow flex flex-col justify-start items-stretch"
        >
          <TabsList className="self-start">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          </TabsList>

          {currentTab === 'appointments' && (
            <TabsContent value="appointments" className="h-full flex flex-col justify-start items-stretch bg-white rounded-md shadow-md">
              <ScrollArea className="flex-grow basis-px">
                <Table>
                  <TableHeader className="sticky top-0 bg-white shadow-sm">
                    <TableRow>
                      <TableHead className="py-2 pl-8">Date</TableHead>
                      <TableHead className="py-2">{'Time (Estimated)'}</TableHead>
                      <TableHead className="py-2 pr-8">Status</TableHead>
                    </TableRow>
                  </TableHeader>      

                  <TableBody className="overflow-auto">
                    {patientAppointments.map((appointment) => {
                      const appointmentDateText = appointment.eta.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                      const appointmentTimeText = appointment.eta.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                      let statusText;
                      if (appointment.status === 0) {
                        statusText = 'Cancelled';
                      } else if (isAfter(appointment.eta, new Date())) {
                        statusText = 'Pending';
                      } else {
                        statusText = 'Completed';
                      }

                      return (
                        <TableRow 
                          className="cursor-pointer"
                          key={`appointment-${appointment.id}`}
                          onClick={() => {}} // TODO: Show appointment drawer
                        >
                          <TableCell className="pl-8">{appointmentDateText}</TableCell>

                          <TableCell>{appointmentTimeText}</TableCell>

                          <TableCell className="pr-8">
                            <span className={`
                              w-min font-medium rounded-sm text-xs py-1 px-2
                              ${statusText === 'Cancelled' ? 'text-red-600 bg-red-100' : 
                                statusText === 'Pending' ? 'text-orange-600 bg-orange-100' : 
                                'text-green-600 bg-green-100'
                              }
                            `}>
                              {statusText}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>        
                </Table>
              </ScrollArea>
            </TabsContent>
          )}

          {currentTab === 'prescriptions' && (
            <TabsContent value="prescriptions" className="h-full flex flex-col justify-start items-stretch bg-white rounded-md shadow-md">
              <ScrollArea className="flex-grow basis-px">
                  {prescriptions.map((prescription, index) => (
                    <>
                      <div 
                        key={`prescription-${index}`} 
                        className="p-8 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {}} // TODO: Open appointment drawer
                      >
                        <p className="leading-none">{prescription}</p>
                      </div>

                      <Separator />
                    </>
                  ))}
              </ScrollArea>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}