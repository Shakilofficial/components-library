import { MessageSquare } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import FieldWrapper from "./FieldWrapper";

interface TextareaInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const TextareaInput = ({ name, label, placeholder }: TextareaInputProps) => {
  const { register } = useFormContext();

  return (
    <FieldWrapper
      name={name}
      label={label}
      icon={<MessageSquare className="w-4 h-4" />}
    >
      <Textarea id={name} {...register(name)} placeholder={placeholder} />
    </FieldWrapper>
  );
};

export default TextareaInput;
