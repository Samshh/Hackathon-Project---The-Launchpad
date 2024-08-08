import DoctorDetailItem from "@/components/doctor/DoctorDetailItem";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import { CalendarX, EditIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import PlannedAbsenceDialogContent from "./PlannedAbsenceDialogContent";
import { PlannedAbsence } from "./types";
import WorkingHoursDialog from "./WorkingHoursDialog";

const doctor = {
  name: "Ralph Kris Enrique",
  email: "test1@mail.com",
  sex: "Male",
  contactNumber: "09123456789",
  department: "Internal Medicine",
  specialization: "Dev 1",
  address: "El Rio",
};

const absences: PlannedAbsence[] = [
  {
    id: 1,
    doctorId: 0,
    startDate: new Date(2024, 6, 25, 8, 0),
    endDate: new Date(2024, 6, 25, 17, 0),
  },
  {
    id: 2,
    doctorId: 0,
    startDate: new Date(2024, 6, 26, 8, 0),
    endDate: new Date(2024, 6, 26, 17, 0),
  },
  {
    id: 3,
    doctorId: 0,
    startDate: new Date(2024, 6, 27, 8, 0),
    endDate: new Date(2024, 6, 27, 17, 0),
  }
]

export default function DoctorAccountPage() {
  const [currentTab, setCurrentTab] = useState('working-hours');

  return (
    <main className="h-full min-h-[480px] flex-grow flex flex-col justify-start items-stretch gap-4 pt-4">
      <h5>Account</h5>

      <div className="flex-grow flex flex-row justify-start items-stretch gap-8">
        <div className="flex flex-col justify-start items-stretch gap-4">
          <div className="flex-grow w-80 flex flex-col justify-start items-start gap-4 bg-white border border-gray-200 rounded-md shadow-md px-6 py-4">
            <div className="flex flex-row justify-start items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <h6>Dr. {doctor.name}</h6>
            </div>

            <Separator />

            <DoctorDetailItem label="Email" value={doctor.email} />

            <DoctorDetailItem label="Sex" value={doctor.sex} />

            <DoctorDetailItem label="Contact Number" value={doctor.contactNumber} />

            <DoctorDetailItem label="Department" value={doctor.department} />

            <DoctorDetailItem label="Specialization" value={doctor.specialization} />

            <DoctorDetailItem label="Address" value={doctor.address} />
          </div>
        </div>

        <Tabs
          defaultValue="working-hours"
          onValueChange={(value) => setCurrentTab(value)}
          className="flex-grow flex flex-col justify-start items-stretch"
        >
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <TabsList>
              <TabsTrigger value="working-hours">Working Hours</TabsTrigger>
              <TabsTrigger value="planned-absences">Planned Absences</TabsTrigger>
            </TabsList>

            {currentTab === 'planned-absences' && (
              <Dialog>
                <DialogTrigger>
                  <Button className="gap-2"><CalendarX size={16} /> Plan an Absence</Button>
                </DialogTrigger>

                <PlannedAbsenceDialogContent />
              </Dialog>
            )}
          </div>

          {currentTab === 'working-hours' && (
            <TabsContent
              value="working-hours"
              className="flex-grow flex flex-col justify-start items-stretch gap-4 bg-white rounded-md shadow-md overflow-hidden"
            >
              <WorkingHoursDialog />
            </TabsContent>
          )}

          {currentTab === 'planned-absences' && (
            <TabsContent
              value="planned-absences"
              className="flex-grow flex flex-col justify-start items-stretch gap-4 bg-white rounded-md shadow-md overflow-hidden"
            >
              {/* TODO: Add calendar here for planned absences */}
              <ScrollArea className="flex-grow basis-px">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="pl-8 py-2">Start</TableHead>
                      <TableHead className="py-2">End</TableHead>
                      <TableHead className="pr-8"></TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {absences.map((absence) => (
                      <TableRow key={`absence-${absence.id}`}>
                        <TableCell className="pl-8 py-4">
                          {absence.startDate.toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                          })}
                        </TableCell>
                        <TableCell className="py-4">
                          {absence.endDate.toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                          })}
                        </TableCell>

                        <TableCell className="pr-8 py-4">
                          <div className="flex flex-row justify-end items-center">
                            <Dialog>
                              <DialogTrigger>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                >
                                  <EditIcon size={16} />
                                </Button>
                              </DialogTrigger>

                              <PlannedAbsenceDialogContent plannedAbsence={absence} />
                            </Dialog>

                            <Dialog>
                              <DialogTrigger>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                >
                                  <TrashIcon size={16} />
                                </Button>
                              </DialogTrigger>

                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Delete item</DialogTitle>
                                  <DialogDescription>Are you sure you want to delete this item?</DialogDescription>
                                </DialogHeader>

                                <div className="flex flex-row justify-end items-center gap-2">
                                  <DialogClose>
                                    <Button variant="ghost">Cancel</Button>
                                  </DialogClose>

                                  <Button
                                    variant="destructive"
                                    onClick={() => {
                                      // TODO: Delete absence from list
                                    }}
                                  >Delete</Button>
                                </div>
                              </DialogContent>
                            </Dialog>

                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </main>
  )
}