import { useState } from "react";

export const useDrawer = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return { isExpanded, setIsExpanded };
};
