import React from "react";
import { binders } from "@/data";
export default async function Binder({
  params,
}: {
  params: Promise<{ binderId: string }>;
}) {
  const binderId = (await params).binderId;
  const binder = binders.find((binder) => binder.binderId === binderId);
  if (!binder) {
    return <div>No such Binder exists!</div>;
  }

  return <div>{binder.title}</div>;
}
