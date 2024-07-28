import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

interface DateTimeFieldProps {
  control: Control<any, any>,
  name: string,
}

export default function DateTimeField({
  control,
  name
}: DateTimeFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
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
                    <span>Pick a date and time</span>
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
  )
}