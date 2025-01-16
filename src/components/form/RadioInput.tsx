import { Radio } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import FieldWrapper from "./FieldWrapper";

interface RadioInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

const RadioInput = ({ name, label, options }: RadioInputProps) => {
  const { control } = useFormContext();

  return (
    <FieldWrapper
      name={name}
      label={label}
      icon={<Radio className="w-4 h-4" />}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            className="flex flex-col space-y-1"
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={`${name}-${option.value}`}
                />
                <Label htmlFor={`${name}-${option.value}`}>
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </FieldWrapper>
  );
};

export default RadioInput;
