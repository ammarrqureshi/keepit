"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";
import { FiPenTool, FiPlus, FiTrash, FiStar, FiEdit2 } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  icon: IconType;
  iconStyle?: string;
}

export default function BinderIconButton({
  icon: Icon,
  iconStyle,
  children,
  ...props
}: IconButtonProps) {
  const [selectedIcon, setSelectedIcon] = useState<any>(FiPlus);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" {...props}>
          <selectedIcon className={iconStyle} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-row gap-2 flex-wrap  max-w-72 h-auto overflow-visible ">
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
