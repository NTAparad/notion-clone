"use client";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import { Navigation } from "@/app/(main)/_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className={"w-full flex items-center justify-center"}>
        <Spinner size={"lg"} />
      </div>
    );
  }
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className={"h-full flex dark:bg[#1f1f1f]"}>
      <Navigation />
      <main className={"h-full overflow-y-auto flex-1"}>{children}</main>
    </div>
  );
};
export default MainLayout;
