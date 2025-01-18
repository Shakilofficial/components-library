import { Button } from "@/components/ui/button"; // Adjust path as needed
import { Calendar } from "@/components/ui/calendar"; // Adjust path as needed
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; // Adjust path as needed
import { cn } from "@/lib/utils"; // Adjust path as needed
import { formatISO } from "date-fns"; // Import formatISO
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormLabel } from "../ui/form";

interface DatePickerInputProps {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const DatePickerInput = ({
  name,
  label,
  placeholder,
  disabled,
}: DatePickerInputProps) => {
  const { control } = useFormContext();
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                disabled={disabled}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  // Format the date using toISOString for the desired format
                  formatISO(date)
                ) : (
                  <span>{placeholder || "Pick a date"}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  setDate(newDate);
                  field.onChange(newDate); // Update the form value with the selected date
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    />
  );
};

export default DatePickerInput;
