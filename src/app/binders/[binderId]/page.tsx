import React from "react";
import { binders } from "@/data";
export default async function Binder({
  params,
}: {
  params: Promise<{ binderId: string }>;
}) {
  const binderId = (await params).binderId;
  return (
    <div>
      Binder
      {}
    </div>
  );
}
