import { Dialog } from "@/components/ui/dialog";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import { useState, useMemo } from "react";
import WorkingHoursDialogContent from "./WorkingHoursDialogContent";
import { AvailabilityInput, AvailabilityResponseData } from "./types";
import axios from "axios";
import { useQuery } from "react-query";
import { militaryTimeToDate } from "@/lib/utils";

const fetchWorkingHours = async () => {
  const response = await axios.get(`${import.meta.env.VITE_CANISTER_BE_ID}/doctor/schedule`, {
    withCredentials: true
  });

  return response.data.data;
}

export default function WorkingHoursDialog() {
  const [isWorkingHoursDialogOpen, setIsWorkingHoursDialogOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState<AvailabilityInput | null>(null);

  const [workingHours, setWorkingHours] = useState([]);

  const floatingTimeBlocks = useMemo(() => {
    if (workingHours.length === 0) {
      return [];
    }

    console.log("BEFORETEMP FLOATING TIME BLOCKS");

    const tempFloatingTimeBlocks = workingHours.map((availability: AvailabilityResponseData) => ({
      id: availability.availabilityId,
      dayOfTheWeek: availability.day + 1,
      startTime: militaryTimeToDate(availability.startTime),
      endTime: militaryTimeToDate(availability.endTime),
    }));

    console.log("TEMP FLOATING TIME BLOCKS:");
    console.log(tempFloatingTimeBlocks);

    return tempFloatingTimeBlocks;
  }, [workingHours]);

  const { status } = useQuery('doctor-working-hours', fetchWorkingHours, {
    enabled: true,
    onSuccess: (data) => {
      console.log("success!");
      console.log(data);
      console.log("success2!");
      setWorkingHours(data);
    },
  })

  if (status === "success" && floatingTimeBlocks !== undefined) {
    return (
      <Dialog open={isWorkingHoursDialogOpen} onOpenChange={(open) => {
        setIsWorkingHoursDialogOpen(open);
        if (!open) {
          setSelectedAvailability(null);
        }
      }}>
        <WeeklyCalendar
          // TODO: Add availability time blocks here
          // floatingTimeBlocks={[

          // ]}
          onCalendarClick={(selectedDateTime) => {
            setSelectedAvailability({ selectedDateTime });
            setIsWorkingHoursDialogOpen(true);
          }}
          onFloatingTimeBlockClick={(selectedTimeBlock) => {
            setSelectedAvailability({
              selectedDateTime: selectedTimeBlock.startTime,
              availabilityId: selectedTimeBlock.availabilityId,
            });
            setIsWorkingHoursDialogOpen(true);
          }}
          floatingTimeBlocks={floatingTimeBlocks}
        />

        {selectedAvailability && (
          <WorkingHoursDialogContent
            selectedAvailability={selectedAvailability}
            closeDialog={() => setIsWorkingHoursDialogOpen(false)}
          />
        )}


      </Dialog>
    )
  }

  return null;
}