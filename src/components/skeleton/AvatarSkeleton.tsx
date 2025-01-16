import Skeleton from "./Skeleton";

interface AvatarSkeletonProps {
  size?: string;
}

const AvatarSkeleton = ({ size = "h-12 w-12" }: AvatarSkeletonProps) => {
  return <Skeleton className={`${size} rounded-full`} />;
};

export default AvatarSkeleton;
