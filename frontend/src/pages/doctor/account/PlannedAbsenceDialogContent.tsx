import { DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { z } from "zod";
import { PlannedAbsence } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";

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
    ...(plannedAbsence ? { defaultValues: {
      startDate: plannedAbsence.startDate,
      endDate: plannedAbsence.endDate,
    }} : {}),
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

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "Pp")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => {
                            if (!date) return;

                            const prevStartHours = field.value.getHours();
                            const prevStartMinutes = field.value.getMinutes();

                            const selectedDate = new Date(date);
                            selectedDate.setHours(prevStartHours, prevStartMinutes);
                            field.onChange(selectedDate);
                          }}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />

                        <Input
                          type="time"
                          value={field.value ? format(field.value, "HH:mm") : ""}
                          onChange={(e) => {
                            const selectedDate = new Date(field.value);
                            const [hours, minutes] = e.target.value.split(":");
                            selectedDate.setHours(parseInt(hours), parseInt(minutes));
                            field.onChange(selectedDate);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-1">
              <Label>End</Label>

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "Pp")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => {
                            if (!date) return;

                            const prevStartHours = field.value.getHours();
                            const prevStartMinutes = field.value.getMinutes();

                            const selectedDate = new Date(date);
                            selectedDate.setHours(prevStartHours, prevStartMinutes);
                            field.onChange(selectedDate);
                          }}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />

                        <Input
                          type="time"
                          value={field.value ? format(field.value, "HH:mm") : ""}
                          onChange={(e) => {
                            const selectedDate = new Date(field.value);
                            const [hours, minutes] = e.target.value.split(":");
                            selectedDate.setHours(parseInt(hours), parseInt(minutes));
                            field.onChange(selectedDate);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
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