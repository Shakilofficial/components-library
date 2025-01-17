import Loading from "@/components/feedback/Loading";
import Form from "@/components/form/Form";
import TextInput from "@/components/form/TextInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleSubmit = async (data: { userId: string; password: string }) => {
    const toastId = toast.loading(<Loading size="sm" text="Logging in..." />);

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      // Call login mutation
      const res = await login(userInfo).unwrap();

      // Verify token and extract user info
      const user = verifyToken(res.data.accessToken);

      // Dispatch user info and token to Redux
      dispatch(setUser({ user, token: res.data.accessToken }));

      toast.success("Logged in successfully!", { id: toastId, duration: 2000 });

      // Redirect user based on role
      if (user.role === "admin") {
        navigate("/dashboard");
      } else if (user.role === "student") {
        navigate("/");
      } else {
        // Handle if role is not found or invalid
        toast.error("Invalid user role", { id: toastId });
        navigate("/auth/login");
      }
    } catch (err) {
      toast.error("Login failed. Please check your credentials.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      {/* Form */}
      <Form
        schema={loginSchema}
        onSubmit={handleSubmit}
        className="space-y-4"
        submitText="Log in"
      >
        <TextInput
          name="userId"
          label="User ID"
          placeholder="Enter your User ID"
        />
        <TextInput
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
      </Form>
      <div className="text-center space-y-2">
        <Link
          to="/auth/forget-password"
          className="text-sm text-muted-foreground hover:underline"
        >
          Forgot your password?
        </Link>
        <div className="text-sm">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-primary hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
