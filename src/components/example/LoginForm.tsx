import { z } from "zod";
import DatePickerInput from "../input/DatePickerInput"; // Import DatePickerInput
import FormWrapper from "../input/FormWrapper";
import PasswordInput from "../input/PasswordInput";
import TextInput from "../input/TextInput";

// Define schema for login form
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  birthDate: z.date().nullable().optional(), // Add validation for birth date
});

const LoginForm = () => {
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data); // Handle form submission
  };

  return (
    <FormWrapper
      schema={loginSchema}
      onSubmit={onSubmit}
      defaultValues={{ email: "", password: "", birthDate: null }} // Set default values
      submitLabel="Log in"
    >
      <TextInput name="email" label="Email" placeholder="Enter your email" />
      <PasswordInput
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
      <DatePickerInput
        name="birthDate"
        label="Date"
        placeholder="Select your birth date"
      />
    </FormWrapper>
  );
};

export default LoginForm;
