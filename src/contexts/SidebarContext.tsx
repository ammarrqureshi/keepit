import { createContext, useState, ReactNode } from "react";
import { SidebarContextType } from "@/types.type";

export const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider: React.FC<{children:ReactNode}> = ({ children }) => {
const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return(

<SidebarContext.Provider value={{isExpanded, setIsExpanded}}>
    {children}
</SidebarContext.Provider>
    )

}