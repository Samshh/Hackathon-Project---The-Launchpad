import DoctorDetailItem from "@/components/doctor/DoctorDetailItem";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const doctor = {
  name: "Juan Dela Cruz",
  email: "jdcruz@gmail.com",
  sex: "Male",
  age: "18 years, 6 months",
  contactNumber: "09123456789",
  department: "Internal Medicine",
  specialization: "Cardiology",
  address: "123 Main St., Quezon City",
};

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

            <DoctorDetailItem label="Age" value={doctor.age} />

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
            <h6>Schedule</h6>

            <TabsList>
              <TabsTrigger value="working-hours">Working Hours</TabsTrigger>
              <TabsTrigger value="planned-absences">Planned Absences</TabsTrigger>
            </TabsList>
          </div>

          {currentTab === 'working-hours' && (
            <TabsContent 
              value="working-hours"
              className="flex-grow flex flex-col justify-start items-stretch gap-4 bg-white rounded-md shadow-md p-4"
            >
              {/* TODO: Add calendar here for working hours */}
              <p> Working Hours </p>
            </TabsContent>
          )}

          {currentTab === 'planned-absences' && (
            <TabsContent 
              value="planned-absences"
              className="flex-grow flex flex-col justify-start items-stretch gap-4 bg-white rounded-md shadow-md p-4"
            >
              {/* TODO: Add calendar here for planned absences */}
              <p>Planned Absences</p>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </main>
  )
}