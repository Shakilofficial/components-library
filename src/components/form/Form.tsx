import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<T>;
  schema: z.ZodType<T>;
  defaultValues?: Partial<T>;
  submitText?: string;
  className?: string;
}

const Form = <T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues = {},
  submitText = "Submit",
  className = "",
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-6 ${className}`}
      >
        {children}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : submitText}
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
