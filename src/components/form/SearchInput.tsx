import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import FieldWrapper from "./FieldWrapper";

interface SearchInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const SearchInput = ({ name, label, placeholder }: SearchInputProps) => {
  const { control } = useFormContext();
  return (
    <FieldWrapper
      name={name}
      label={label}
      icon={<Search className="w-4 h-4" />}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={name}
            placeholder={placeholder}
            className={cn(error && "border-red-500")}
            {...field}
          />
        )}
      />
    </FieldWrapper>
  );
};

export default SearchInput;
