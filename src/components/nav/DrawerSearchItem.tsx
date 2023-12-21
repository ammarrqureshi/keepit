import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Grid, IconButton, TextField } from "@radix-ui/themes";
import React, { useContext } from "react";
import { SidebarContext } from "./contexts/SidebarContext";
import { SidebarContextType } from "types.type";

export const DrawerSearchItem = () => {
  const { isExpanded } = useContext(SidebarContext) as SidebarContextType;
  return (
    <Grid
      className={`w-full `}
      px="4"
      columns={isExpanded ? "4" : "1"}
      gap="2"
      width="auto"
    >
      <Box className="flex justify-center items-center">
        <IconButton variant="ghost">
          {" "}
          <MagnifyingGlassIcon width="22" height="22" />{" "}
        </IconButton>
      </Box>
      <Box
        className={` ${
          isExpanded ? " col-span-3  flex " : " hidden "
        } justify-start items-center`}
      >
        <TextField.Root className="max-w-[150px]">
          <TextField.Input variant="surface" size="3" placeholder="Search..." />{" "}
        </TextField.Root>
      </Box>
    </Grid>
  );
};
