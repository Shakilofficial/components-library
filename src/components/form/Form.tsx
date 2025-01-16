import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  schema: z.ZodType<T>;
  defaultValues?: Partial<T>;
  submitText?: string;
  className?: string;
}

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  submitText = "Submit",
  className = "",
  ...props
}: FormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`space-y-6 ${className}`} // Apply the className prop here
        {...props}
      >
        {children}
        <Button type="submit" disabled={methods.formState.isSubmitting}>
          {methods.formState.isSubmitting ? "Submitting..." : submitText}
        </Button>
      </form>
    </FormProvider>
  );
}
