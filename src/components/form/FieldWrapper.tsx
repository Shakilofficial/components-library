import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";

interface FieldWrapperProps {
  name: string;
  label: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const FieldWrapper = ({ name, label, children, icon }: FieldWrapperProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="flex items-center space-x-2">
        {icon}
        <span>{label}</span>
      </Label>
      {children}
      {error && (
        <p className="text-sm text-destructive">{error.message as string}</p>
      )}
    </div>
  );
};

export default FieldWrapper;
