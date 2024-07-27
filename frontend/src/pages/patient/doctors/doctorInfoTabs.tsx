import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Doctor } from './doctorsMockData';

export default function DoctorInfoPageTabs({ doctor }: { doctor: Doctor }) {
  const [currentTab, setCurrentTab] = useState('doctorInfo');
  return (
    <Tabs
      onValueChange={(value) => setCurrentTab(value)}
      defaultValue="doctorInfo"
      className="flex flex-col flex-grow w-full gap-4"
    >
      <TabsList className="grid grid-cols-2 w-fit">
        <TabsTrigger
          value="doctorInfo"
          className={`before:hidden ${currentTab === 'doctorInfo' && 'before:block'} before:absolute relative before:-bottom-[2px] before:h-[2px] before:bg-accent before:w-full`}
        >
          Doctor Information
        </TabsTrigger>
        <TabsTrigger
          value="doctorScheds"
          className={`before:hidden before:absolute ${currentTab === 'doctorScheds' && 'before:block'} relative before:-bottom-[2px] before:h-[2px] before:bg-accent before:w-full`}
        >
          Doctor Schedules
        </TabsTrigger>
      </TabsList>
      {currentTab === 'doctorInfo' && (
        <TabsContent value="doctorInfo" className={`flex flex-col bg-white rounded-md shadow-md p-6 gap-8`}>
          <div className="grid grid-cols-4 gap-y-8">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-lg font-semibold">
                {doctor.firstName} {doctor.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="text-lg font-semibold">{doctor.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Specialization</p>
              <p className="text-lg font-semibold">{doctor.specialization}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-semibold">{doctor.address}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-semibold">{doctor.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact</p>
              <p className="text-lg font-semibold">{doctor.contact}</p>
            </div>
          </div>
        </TabsContent>
      )}
      {currentTab === 'doctorScheds' && (
        <TabsContent value="doctorScheds" className={`flex flex-col flex-grow`}>
          show doctor availability calendar
        </TabsContent>
      )}
    </Tabs>
  );
}
