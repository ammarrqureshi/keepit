import { Dispatch, SetStateAction } from "react";

export type NotebookType = {
  title: string;
  description: string;
  created_at: Date;
  notes: [];
};

export type SidebarContextType = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
};
