import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  name: string;
  label: string;
  disabled?: boolean;
}

const CheckboxInput = ({ name, label, disabled }: CheckboxInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center space-x-2">
          <Checkbox {...field} disabled={disabled} />
          <label>{label}</label>
        </div>
      )}
    />
  );
};

export default CheckboxInput;
