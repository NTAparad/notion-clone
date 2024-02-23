import { Skeleton } from "@/components/ui/skeleton";
import Item from "@/app/(main)/_components/item";
import { FC } from "react";
type Props = {
  level: number;
};
const Skeletons: FC<Props> = ({ level }) => {
  return (
    <div
      style={{ paddingLeft: level ? ` ${level * 12 + 25}px` : "12px" }}
      className={"flex gap-x-2 py-[3px]"}
    >
      <Skeleton className={"h-4 w-4"} />
      <Skeleton className={"h-4 w[30%]"} />
    </div>
  );
};

export default Skeletons;
