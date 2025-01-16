import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import CheckboxInput from "./form/CheckboxInput";
import DatePickerInput from "./form/DatePickerInput";
import FileUploadInput from "./form/FileUploadInput";
import { Form } from "./form/Form";
import RadioInput from "./form/RadioInput";
import SelectInput from "./form/SelectInput";
import SwitchInput from "./form/SwitchInput";
import TextInput from "./form/TextInput";
import TextareaInput from "./form/TextareaInput";

// Update formSchema to ensure that the birthdate is a Date object.
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  country: z.string().min(1, "Please select a country"),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  notifications: z.boolean(),
  birthdate: z.date({ required_error: "Please select a date" }), // Ensure it's typed as Date
  file: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      if (file) {
        return file.size <= 5 * 1024 * 1024; // 5MB limit
      }
      return true;
    }, "File size should be less than 5MB"),
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<FormValues> = {
  name: "",
  email: "",
  message: "",
  country: "",
  terms: false,
  gender: "male",
  notifications: false,
  birthdate: new Date(),
  file: undefined,
};

export default function Home() {
  const onSubmit = async (data: FormValues) => {
    // Ensure birthdate is serialized correctly
    const formData = {
      ...data,
      birthdate:
        data.birthdate instanceof Date
          ? data.birthdate.toISOString()
          : data.birthdate,
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData);
    toast({
      title: "Form submitted successfully!",
      description: "Check the console for the form data.",
    });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Reusable Form Components Demo</h1>
      <div className="max-w-md mx-auto">
        <Form<FormValues>
          onSubmit={onSubmit}
          schema={formSchema}
          defaultValues={defaultValues}
          className="space-y-6"
        >
          <TextInput name="name" label="Name" placeholder="Enter your name" />
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <TextareaInput
            name="message"
            label="Message"
            placeholder="Enter your message"
          />
          <SelectInput
            name="country"
            label="Country"
            options={[
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" },
            ]}
          />
          <CheckboxInput
            name="terms"
            label="I agree to the terms and conditions"
          />
          <RadioInput
            name="gender"
            label="Gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
          <SwitchInput name="notifications" label="Enable notifications" />
          <DatePickerInput name="birthdate" label="Date of Birth" />
          <FileUploadInput
            name="file"
            label="Upload File"
            accept=".pdf,.doc,.docx"
          />
        </Form>
      </div>
    </div>
  );
}
