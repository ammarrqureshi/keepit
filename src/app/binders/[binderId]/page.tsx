import React from "react";

export default function Binder(binderId: number) {
  return <div>Binder {(binderId = 1)}</div>;
}
