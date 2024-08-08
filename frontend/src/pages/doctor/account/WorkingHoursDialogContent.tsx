import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { AvailabilityInput } from "./types";
import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "@/checkpoints/ProviderCheckpoint";

// TODO: Handle edit working hours

interface WorkingHoursDialogContentProps {
  selectedAvailability: AvailabilityInput;
  availabilityId?: number;
  closeDialog: () => void;
}

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const availabilitySchema = z.object({
  day: z.coerce.number().min(0).max(6),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/),
});

const addEditWorkingHours = async (day: number, startTime: string, endTime: string, availabilityId?: number) => {
  let response;
  console.log("Before axios");
  console.log(`day: ${day}`);
  console.log(`startTime: ${startTime}`);
  console.log(`endTime: ${endTime}`);

  if (availabilityId === undefined) {
    response = await axios.post(`${import.meta.env.VITE_CANISTER_BE_ID}/doctor/schedule/create`, {
      day: day,
      StartTime: startTime,
      EndTime: endTime,
    }, {
      withCredentials: true
    });
  } else {
    response = await axios.put(`${import.meta.env.VITE_CANISTER_BE_ID}/doctor/schedule/edit`, {
      day: day,
      StartTime: startTime,
      EndTime: endTime,
      AvailabilityId: availabilityId
    }, {
      withCredentials: true
    })
  }

  return response.data;
}

export default function WorkingHoursDialogContent({
  selectedAvailability,
  availabilityId,
  closeDialog,
}: WorkingHoursDialogContentProps) {
  const addEditMutation = useMutation(
    async (params: { day: number, startTime: string, endTime: string, availabilityId?: number }) => await addEditWorkingHours(params.day, params.startTime, params.endTime, params.availabilityId),
    {
      onSuccess: (data) => {
        console.log("SUCCESS!");
        console.log(data);
        queryClient.invalidateQueries("doctor-working-hours");
      },
      onError: (err) => {
        console.log("ERROR!");
        console.log(err);
      }
    }
  );

  const form = useForm<z.infer<typeof availabilitySchema>>({
    resolver: zodResolver(availabilitySchema),
    defaultValues: {
      day: selectedAvailability.selectedDateTime!.getDay(),
      startTime: format(selectedAvailability.selectedDateTime!, "HH:mm"),
      endTime: format(new Date(selectedAvailability.selectedDateTime!.getTime() + 60 * 60 * 1000), "HH:mm"),
    }
  });

  const onSubmit = (values: z.infer<typeof availabilitySchema>) => {
    console.log("FORM VALUES:");
    console.log(values);
    console.log("Before mutate");
    addEditMutation.mutate({
      day: values.day,
      startTime: values.startTime,
      endTime: values.endTime,
      availabilityId
    });
    console.log("After mutate");
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Available Schedule</DialogTitle>
        <DialogDescription>Enter the details of your available schedule for the selected day.</DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-start items-stretch gap-10">
          <div className="flex flex-col justify-start items-stretch gap-6">
            <FormField
              control={form.control}
              name="day"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Day</FormLabel>
                    <Select
                      value={field.value.toString()}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue>{daysOfTheWeek[Number(field.value)]}</SelectValue>
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="0">Sunday</SelectItem>
                        <SelectItem value="1">Monday</SelectItem>
                        <SelectItem value="2">Tuesday</SelectItem>
                        <SelectItem value="3">Wednesday</SelectItem>
                        <SelectItem value="4">Thursday</SelectItem>
                        <SelectItem value="5">Friday</SelectItem>
                        <SelectItem value="6">Saturday</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )
              }}
            />

            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <Input
                      type="time"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItem>
                )
              }}
            />

            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <Input
                      type="time"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormItem>
                )
              }}
            />
          </div>

          <div className="self-end flex flex-row justify-end items-center gap-2">
            {selectedAvailability.availabilityId ? (
              <Button
                type="button"
                variant="destructive"
                className="w-20"
                onClick={() => {
                  // TODO: Delete available schedule API
                }}
              >
                Delete
              </Button>
            ) : (
              <DialogClose className="w-20">Cancel</DialogClose>
            )}

            <Button type="submit" className="w-20" onClick={closeDialog}>Add</Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  )
}