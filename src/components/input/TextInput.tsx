import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput = ({ name, label, placeholder, disabled }: TextInputProps) => {
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
            <Input
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              className={errors[name] ? "border-red-500" : ""}
            />
          </FormControl>
          <FormMessage>{errors[name]?.message?.toString()}</FormMessage>
        </FormItem>
      )}
    />
  );
};

export default TextInput;
