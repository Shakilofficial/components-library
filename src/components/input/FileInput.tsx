import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import { FormLabel } from "../ui/form";

interface FileInputProps {
  name: string;
  label: string;
  disabled?: boolean;
}

const FileInput = ({ name, label, disabled }: FileInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <FormLabel>{label}</FormLabel>
          <Input type="file" {...field} disabled={disabled} />
        </div>
      )}
    />
  );
};

export default FileInput;
