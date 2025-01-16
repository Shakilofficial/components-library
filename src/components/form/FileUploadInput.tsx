import { Controller, useFormContext } from "react-hook-form"
import FieldWrapper from "./FieldWrapper"
import { UploadCloud } from "lucide-react"
import { Input } from "../ui/input"

interface FileUploadInputProps {
  name: string
  label: string
  accept?: string
}

const FileUploadInput= ({ name, label, accept }: FileUploadInputProps) => {
  const { control, formState: { errors } } = useFormContext()
  const error = errors[name]

  return (
    <FieldWrapper name={name} label={label} icon={<UploadCloud className="w-4 h-4" />}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <Input
            id={name}
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0]
              onChange(file)
            }}
            accept={accept}
            {...field}
          />
        )}
      />
    </FieldWrapper>
  )
}
export default FileUploadInput