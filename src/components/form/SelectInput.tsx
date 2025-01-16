import { Globe } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FieldWrapper from "./FieldWrapper";

interface SelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const SelectInput = ({ name, label, options }: SelectInputProps) => {
  const { control } = useFormContext();

  return (
    <FieldWrapper
      name={name}
      label={label}
      icon={<Globe className="w-4 h-4" />}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </FieldWrapper>
  );
};

export default SelectInput;
