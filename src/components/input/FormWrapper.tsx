import { Button } from "@/components/ui/button"; // Adjust the import as needed
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";

interface FormWrapperProps<T> {
  schema: z.ZodType<T>;
  defaultValues?: Partial<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  submitLabel: string; // Added submit button label
}

const FormWrapper = <T,>({
  schema,
  defaultValues = {},
  onSubmit,
  children,
  submitLabel,
}: FormWrapperProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues, // Make sure to pass default values here
  });

  const handleFormSubmit = (data: T) => {
    onSubmit(data);
    methods.reset(); // Resets the form to defaultValues after submission
  };

  return (
    <FormProvider {...methods}>
      <Form {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          {children}
          <Button type="submit">{submitLabel}</Button>
        </form>
      </Form>
    </FormProvider>
  );
};

export default FormWrapper;
