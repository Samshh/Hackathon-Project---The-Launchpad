import { DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { z } from "zod";
import { PlannedAbsence } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import DateTimeField from "@/components/DateTimeField";

interface PlannedAbsenceDialogContentProps {
  plannedAbsence?: PlannedAbsence;
}

const plannedAbsenceSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
});

export default function PlannedAbsenceDialogContent({
  plannedAbsence,
}: PlannedAbsenceDialogContentProps) {
  const form = useForm<z.infer<typeof plannedAbsenceSchema>>({
    resolver: zodResolver(plannedAbsenceSchema),
    ...(plannedAbsence ? {
      defaultValues: {
        startDate: plannedAbsence.startDate,
        endDate: plannedAbsence.endDate,
      }
    } : {}),
  });

  const onSubmit = (values: z.infer<typeof plannedAbsenceSchema>) => {
    if (plannedAbsence) {
      // Update planned absence
      console.log("Update planned absence", values);
    } else {
      // Create planned absence
      console.log("Create planned absence", values);
    }
  };

  return (
    <DialogContent className="flex flex-col justify-start items-stretch gap-6">
      <DialogHeader>
        <DialogTitle>
          {plannedAbsence ? "Edit planned absence" : "Schedule an absence"}
        </DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-1">
              <Label>Start</Label>

              <DateTimeField control={form.control} name="startDate" />
            </div>

            <div className="flex flex-col justify-start items-start gap-1">
              <Label>End</Label>

              <DateTimeField control={form.control} name="endDate" />
            </div>
          </div>

          <div className="self-end flex flex-row justify-end items-center gap-4">
            <DialogClose>
              <Button type="button" variant="secondary" className="w-20">Cancel</Button>
            </DialogClose>

            <Button type="submit" className="w-20">{plannedAbsence ? "Edit" : "Add"}</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  )
}