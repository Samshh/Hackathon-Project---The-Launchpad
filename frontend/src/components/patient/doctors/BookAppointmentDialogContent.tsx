import WeeklyCalendar from '@/components/WeeklyCalendar/index';
import { Textarea } from '@/components/ui/textarea';
import { useGlobalComponentStore } from '@/components/globalComponentStore';
import { useShallow } from 'zustand/react/shallow';
import { useEffect, useState } from 'react';
import { format, setDay } from 'date-fns';
import axios from "axios"
import { Doctor } from "@/pages/patient/types";
import { militaryTimeToDate } from "@/lib/utils";
import { useMemo } from "react"

export default function BookAppointmentDialogContent({ doctor }: { doctor: Doctor }) {
  // const {data} = useQuery({
  //   queryKey: ['bookappointmentdialog'],
  //   queryFn: async() => {
  //     const response = await axios.get(`http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/get/doctor/${doctor.doctorId}`)
  //     return response.data as Doctor
  //   }
  // })

  const [
    patientSelectedBookingSchedule,
    setPatientSelectedBookingSchedule,
    resetPatientSelectedBookingSchedule,
    closeDialog,
  ] = useGlobalComponentStore(
    useShallow((state) => [
      state.patientSelectedBookingSchedule,
      state.setPatientSelectedBookingSchedule,
      state.resetPatientSelectedBookingSchedule,
      state.closeDialog,
    ]),
  );

  const [selectedReason, setSelectedReason] = useState<'consultation' | 'follow-up' | ''>('');
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    resetPatientSelectedBookingSchedule();
  }, []);

  useEffect(() => { console.log(selectedReason); }, [selectedReason])

  const timeBlocks = useMemo(() => {
    return doctor.schedules.map((schedule) => ({
      id: schedule.scheduleId,
      startTime: militaryTimeToDate(schedule.startTime),
      endTime: militaryTimeToDate(schedule.endTime),
      dayOfTheWeek: schedule.day + 1,
      className: 'bg-yellow-100 text-black flex gap-2 text-xs font-medium border border-yellow-200 hover:bg-accent hover:border-purple-700 hover:text-white transition-colors group'
    }))
  }, [doctor]);

  return (
    <div className="h-[80dvh] w-[75dvw] flex-grow flex flex-col gap-6 items-stretch text-white">
      <p className="text-2xl font-semibold text-black">Book an Appointment</p>
      <div className="flex-grow flex gap-6">
        <div className="flex flex-col gap-6 h-full w-[65%]">
          <p className="text-xl text-black font-semibold">
            Select a schedule<span className="text-red-500">&nbsp;*</span>
          </p>
          <div className="py-4 px-6 border border-dotted border-yellow-700 bg-yellow-100 w-fit rounded-xl text-sm text-black">
            {patientSelectedBookingSchedule ? (
              <p className="font-medium">
                {format(setDay(new Date(), patientSelectedBookingSchedule.dayOfTheWeek! - 1), 'EEEE')},{' '}
                {format(patientSelectedBookingSchedule.startTime, 'HH:mm')}&nbsp;-&nbsp;
                {format(patientSelectedBookingSchedule.endTime!, 'HH:mm')}
              </p>
            ) : (
              <p>Selected schedule will appear here</p>
            )}
          </div>
          <WeeklyCalendar
            areDaysDisplayed
            onFloatingTimeBlockClick={(selectedTimeBlock) => {
              setPatientSelectedBookingSchedule(selectedTimeBlock);
            }}
            floatingTimeBlocks={timeBlocks}
          />
        </div>
        <div className="flex flex-col gap-6 h-full w-[35%]">
          <div className="pb-6 flex flex-col gap-6">
            <p className="text-xl text-black font-semibold">
              Reason for appointment<span className="text-red-500">&nbsp;*</span>
            </p>
            <div className="flex w-full justify-between items-center text-black">
              <button onClick={() => setSelectedReason('consultation')} className="flex gap-3 items-center">
                <div className="size-4 rounded-full  border border-black grid place-items-center">
                  {selectedReason === 'consultation' && <div className="size-[70%] bg-black rounded-full" />}
                </div>
                <p className="font-medium">Consultation</p>
              </button>
              <button onClick={() => setSelectedReason('follow-up')} className="flex gap-3 items-center">
                <div className="size-4 rounded-full border border-black grid place-items-center">
                  {selectedReason === 'follow-up' && <div className="size-[70%] bg-black rounded-full" />}
                </div>
                <p className="font-medium">Follow-up</p>
              </button>
              <div className="flex gap-3 items-center"></div>
            </div>
          </div>
          <div className="flex-grow flex flex-col gap-6">
            <p className="text-xl text-black font-semibold">Leave a note</p>
            <Textarea
              onChange={(e) => setNoteText(e.target.value)}
              value={noteText}
              className="flex-grow text-black text-lg"
            />
          </div>
          <div className="self-end flex gap-7">
            <button
              onClick={() => closeDialog()}
              className="py-3 flex justify-center items-center self-end px-12 bg-gray-500 rounded-xl text-white font-medium"
            >
              Cancel
            </button>
            <button
              className="py-3 flex justify-center items-center self-end px-12 bg-accent rounded-xl text-white font-medium"
              onClick={async () => {
                console.log('STARTING TO BOOK APPOINTMENT');

                if (patientSelectedBookingSchedule !== null) {
                  await axios.post(`${import.meta.env.VITE_CANISTER_BE_ID}/patient/appointment/create`,
                    {
                      DoctorID: doctor.doctorId,
                      ETA: patientSelectedBookingSchedule.startTime.toISOString(),
                      Reason: selectedReason,
                      Note: noteText
                    },
                    {
                      withCredentials: true, // Ensure cookies are sent with the request
                    }
                  );
                }
                console.log('BOOKed APPOINTMENT???');
                closeDialog()
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
