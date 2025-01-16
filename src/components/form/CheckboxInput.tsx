import { Check } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import FieldWrapper from "./FieldWrapper";

interface CheckboxInputProps {
  name: string;
  label: string;
}

const CheckboxInput = ({ name, label }: CheckboxInputProps) => {
  const { control } = useFormContext();

  return (
    <FieldWrapper
      name={name}
      label={label}
      icon={<Check className="w-4 h-4" />}
    >
      <div className="flex items-center space-x-2">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
      </div>
    </FieldWrapper>
  );
};

export default CheckboxInput;
