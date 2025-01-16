import { Bell } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";
import FieldWrapper from "./FieldWrapper";

interface SwitchInputProps {
  name: string;
  label: string;
}

const SwitchInput = ({ name, label }: SwitchInputProps) => {
  const { control } = useFormContext();

  return (
    <FieldWrapper name={name} label={label} icon={<Bell className="w-4 h-4" />}>
      <div className="flex items-center justify-end">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch
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

export default SwitchInput;
