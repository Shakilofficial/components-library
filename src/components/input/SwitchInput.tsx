import { Switch } from "@/components/ui/switch";
import { Controller, useFormContext } from "react-hook-form";

interface SwitchInputProps {
  name: string;
  label: string;
  disabled?: boolean;
}

const SwitchInput = ({ name, label, disabled }: SwitchInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center">
          <Switch {...field} disabled={disabled} />
          <label>{label}</label>
        </div>
      )}
    />
  );
};

export default SwitchInput;
