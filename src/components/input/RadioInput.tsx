import { RadioGroup } from "@/components/ui/radio-group";
import { Controller, useFormContext } from "react-hook-form";
import { FormLabel } from "../ui/form";

interface RadioInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const RadioInput = ({ name, label, options }: RadioInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field}>
            {options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  value={option.value}
                  checked={field.value === option.value}
                  {...field}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    />
  );
};

export default RadioInput;
