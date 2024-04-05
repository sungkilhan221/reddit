import { Skeleton } from "@/components/ui/skeleton";

export default function SuspenseCard() {
  return (
    <>
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
      <Skeleton className="w-full h-[400px]" />
    </>
  );
}
