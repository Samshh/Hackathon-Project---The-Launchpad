import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Doctor } from './doctorsMockData';
import DoctorInfoTab from '@/components/patient/doctors/doctorInfoTabs/DoctorInfoTab';
import DoctorSchedTab from '@/components/patient/doctors/doctorInfoTabs/DoctorSchedTab';
import { DoctorData } from "../types"

export default function DoctorInfoPageTabs({doctorInfo} : {doctorInfo: DoctorData}) {
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
          <DoctorInfoTab doctorInfo={doctorInfo} />
        </TabsContent>
      )}
      {currentTab === 'doctorScheds' && (
        <TabsContent value="doctorScheds" className={`flex flex-col flex-grow`}>
          <DoctorSchedTab />
        </TabsContent>
      )}
    </Tabs>
  );
}
