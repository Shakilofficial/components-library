import { User } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import FieldWrapper from "./FieldWrapper";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const TextInput = ({ name, label, placeholder }: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <FieldWrapper name={name} label={label} icon={<User className="w-4 h-4" />}>
      <Input id={name} {...register(name)} placeholder={placeholder} />
    </FieldWrapper>
  );
};

export default TextInput;
