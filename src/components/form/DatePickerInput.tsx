import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import FieldWrapper from "./FieldWrapper";

interface DatePickerInputProps {
  name: string;
  label: string;
}

const DatePickerInput = ({ name, label }: DatePickerInputProps) => {
  const { control } = useFormContext();

  return (
    <FieldWrapper
      name={name}
      label={label}
      icon={<CalendarIcon className="w-4 h-4" />}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? (
                  format(field.value, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
    </FieldWrapper>
  );
};
export default DatePickerInput;
