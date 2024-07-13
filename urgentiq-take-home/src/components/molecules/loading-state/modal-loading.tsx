import { Skeleton } from "@/components/ui/skeleton";

export const ModalLoading = () => {
  return (
    <div className="flex gap-4 items-center justify-center h-[300px] w-[300px]">
      <Skeleton className="rounded-lg w-[100px] h-[100px]" />
      <div className="flex flex-col justify-center gap-4">
        <Skeleton className="rounded-full w-[200px] h-4" />
        <Skeleton className="rounded-full w-[200px] h-4" />
        <Skeleton className="rounded-full w-[200px] h-4" />
      </div>
    </div>
  );
};
