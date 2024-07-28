import { Dialog } from "@/components/ui/dialog";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import { useState } from "react";
import WorkingHoursDialogContent from "./WorkingHoursDialogContent";
import { AvailabilityInput } from "./types";

export default function WorkingHoursDialog() {
  const [isWorkingHoursDialogOpen, setIsWorkingHoursDialogOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState<AvailabilityInput | null>(null);
  
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