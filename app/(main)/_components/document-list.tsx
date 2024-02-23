"use client";

import { FC, useState } from "react";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Skeleton from "@/app/(main)/_components/skeleton";
import { cn } from "@/lib/utils";
import Item from "@/app/(main)/_components/item";
type Props = {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
};
const DocumentList: FC<Props> = ({ parentDocumentId, level = 0 }) => {
  const param = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const onExpand = (documentId: string) => {
    setExpanded((preExpanded) => ({
      ...preExpanded,
      [documentId]: !preExpanded[documentId],
    }));
  };
  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });
  const onRedirect = (documentId: string) => {
    router.push(`document/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <>
        <Skeleton level={level} />
        {level === 0 && (
          <>
            <Skeleton level={level} />
            <Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <p
        style={{ paddingLeft: level ? `${level * 12 + 25}px ` : undefined }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expanded && "last:block",
          level === 0 && "hidden",
        )}
      >
        No page inside
      </p>
      {documents.map((document) => {
        <div key={document._id}>
          <Item id={document._id} onClick={} icon={} label={} />
        </div>;
      })}
    </>
  );
};
export default DocumentList;
