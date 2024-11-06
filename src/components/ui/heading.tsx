import * as React from "react";

import { cn } from "@/lib/utils";

const Heading1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={cn("font-bold text-4xl ", className)} {...props} />
));
Heading1.displayName = "Heading1";

const Heading2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("font-bold text-2xl ", className)} {...props} />
));
Heading2.displayName = "Heading2";
export { Heading1, Heading2 };
