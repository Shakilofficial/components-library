import { logout } from "@/redux/features/auth/authSlice"; // Logout action
import { useGetUserQuery } from "@/redux/features/user/userApi"; // API query hook
import { useAppDispatch, useAppSelector } from "@/redux/hook"; // For accessing the Redux store
import { RootState } from "@/redux/store"; // For accessing the store state
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AvatarSkeleton from "./skeleton/AvatarSkeleton"; // Skeleton for loading state
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const UserProfile = () => {
  const { token } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetUserQuery(token ? { token } : null);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (!data) {
      navigate("/auth/login");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  // Handle loading and error states
  if (isLoading) {
    return <AvatarSkeleton />;
  }

  const user = data?.data;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full"
          onClick={handleButtonClick}
        >
          <Avatar className="h-8 w-8">
            {user ? (
              <>
                <AvatarImage
                  src={user?.profileImg}
                  alt={user?.fullName || "User"}
                />
                <AvatarFallback>
                  {user?.fullName?.[0]?.toUpperCase() || (
                    <User className="h-4 w-4" />
                  )}
                </AvatarFallback>
              </>
            ) : (
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {user && (
        <DropdownMenuContent className="w-44" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium leading-none">
                {user.fullName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.user?.role}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/settings")}>
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default UserProfile;
