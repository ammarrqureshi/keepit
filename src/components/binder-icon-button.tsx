import React from "react";
import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  icon: IconType;
  children: React.ReactNode;
}

export default function BinderIconButton({
  icon: Icon,
  children,
  ...props
}: IconButtonProps) {
  return (
    <Button size="icon" {...props}>
      <Icon />
      {children}
    </Button>
  );
}

// Set default props instead of using parameter defaults
BinderIconButton.defaultProps = {
  children: "Button",
  icon: () => null,
};
