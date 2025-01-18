import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

interface SelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

const SelectInput = ({
  name,
  label,
  options,
  placeholder,
  disabled,
}: SelectInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              {...field}
              disabled={disabled}
              className={errors[name] ? "border-red-500" : ""}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormMessage>{errors[name]?.message?.toString()}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default SelectInput;
