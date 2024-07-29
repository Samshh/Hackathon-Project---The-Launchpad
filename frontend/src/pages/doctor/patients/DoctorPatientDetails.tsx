import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import DoctorDetailItem from "../../../components/doctor/DoctorDetailItem";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { isAfter } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { DoctorPatient } from "./types";
import { formatDistanceToNow } from "date-fns";

const fetchPatient = async (id: number) => {
  const response = await axios.get(`http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/patient/${id}`, {
    withCredentials: true
  });

  return response.data.data;
};

export default function DoctorPatientDetails() {
  const { patientId } = useParams();
  const [currentTab, setCurrentTab] = useState('appointments');

  const [patient, setPatient] = useState<DoctorPatient | undefined>(undefined);
  const { status } = useQuery(
    ['doctor-patient-item', patientId],
    () => fetchPatient(patientId),
    {
      enabled: patientId !== undefined && patientId !== null,
      onSuccess: (data: DoctorPatient) => {
        setPatient(data);
      }
    }
  );

  if (status === "success" && patient !== undefined) {
    return (
      <div className="flex-grow flex flex-col justify-start items-stretch pt-4 gap-4">
        <div className="flex-grow flex flex-row justify-start items-stretch gap-4">
          <div className="w-80 flex flex-col justify-start items-stretch gap-6 bg-white rounded-md shadow-md border border-gray-200 px-6 py-4">
            <div className="flex flex-row justify-start items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-300" />

              <div className="flex flex-col justify-start items-start">
                <h6>{patient.patientName}</h6>
                <p className="text-gray-500 text-sm">Last appointment {formatDistanceToNow(new Date(patient.date))} ago</p>
              </div>
            </div>

            <hr className="bg-gray-100" />

            <div className="flex-grow flex flex-col justify-start items-stretch gap-4">
              <DoctorDetailItem label="Sex" value={patient.sex} />
              <DoctorDetailItem label="Age" value={patient.age} />
              <DoctorDetailItem label="Email" value={patient.email} />
              <DoctorDetailItem label="Contact Number" value={patient.contact ?? "N/A"} />
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
                      {patient.appointments.map((appointment) => {
                        const appointmentDateObject = new Date(appointment.date);
                        const appointmentStatus = Number(appointment.status);
                        const appointmentDateText = appointmentDateObject.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                        const appointmentTimeText = appointmentDateObject.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                        let statusText;
                        if (appointmentStatus === 0) {
                          statusText = 'Cancelled';
                        } else if (isAfter(appointmentDateObject, new Date())) {
                          statusText = 'Pending';
                        } else {
                          statusText = 'Completed';
                        }

                        return (
                          <TableRow
                            className="cursor-pointer"
                            key={`appointment-${appointment.id}`}
                            onClick={() => { }} // TODO: Show appointment drawer
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
                  {patient.prescriptions.map((prescription, index) => (
                    <>
                      <div
                        key={`prescription-${index}`}
                        className="p-8 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { }} // TODO: Open appointment drawer
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

  return null;
}