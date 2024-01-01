import { Dispatch, SetStateAction } from "react";

export type NotebookType = {
  title: string;
  color?: string | "#898989";
  description: string;
  created_at: Date;
  notes: {
    title: string
    note: string
  }[];
};

export type SidebarContextType = {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
};
export type NoteType ={
  title: string;
  text: string;
  created_at: Date;

}