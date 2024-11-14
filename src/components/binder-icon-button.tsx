import React from "react";
import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";
import { FiPenTool, FiPlus, FiTrash, FiStar, FiEdit2 } from "react-icons/fi";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  icon: IconType;
  iconStyle?: string;
  children: React.ReactNode;
}

export default function BinderIconButton({
  icon: Icon,
  iconStyle,
  children,
  ...props
}: IconButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="icon" {...props}>
          <Icon className={iconStyle} />
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-row gap-2 ">
        <DropdownMenuItem className="w-8 h-8">
          <FiPlus />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Set default props instead of using parameter defaults
BinderIconButton.defaultProps = {
  children: "Button",
  icon: () => null,
};
