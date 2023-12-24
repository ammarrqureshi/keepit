import { Grid, Box, Button } from "@radix-ui/themes";
import { ReactNode, useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarContext";
import { SidebarContextType } from "@/types.type";
import { useDrawer } from "@/hooks/useDrawer";

type ItemProps = {
  icon: string;
  children: ReactNode;
  value: string;
  variant?: string;
};

export const DrawerItem = ({ icon: Icon, children, value }: ItemProps) => {
  const { isExpanded } = useDrawer()
  return (
    <Button variant="ghost" size="3">
      <Grid
        className={`  w-full `}
        px="4"
        py="2"
        columns={isExpanded ? "4" : "1"}
        gap="4"
        width="100%"
      >
        <Box className="flex justify-center items-center ">
          {Icon && <Icon />}
          {children}
        </Box>
        <Box
          className={`"  ${
            isExpanded ? " flex col-span-3  " : "hidden"
          }   justify-start items-center"`}
        >
          {value}
        </Box>
      </Grid>
    </Button>
  );
};
