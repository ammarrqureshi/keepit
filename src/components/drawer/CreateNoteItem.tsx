import { SidebarContext } from "@/contexts/SidebarContext";
import { useDrawer } from "@/hooks/useDrawer";
import { SidebarContextType } from "@/types.type";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Grid, Box } from "@radix-ui/themes";
import { useContext } from "react";

export const CreateNoteItem = () => {
  const { isExpanded } = useDrawer()

  return (
    <Button variant="soft" style={{ padding: "1rem 0", margin: 4 }} size="3">
      <Grid px="4" py="2" columns={isExpanded ? "4" : "1"} gap="4" width="100%">
        <Box className="flex justify-center items-center ">
          <PlusIcon width="22" height="22" />
        </Box>
        <Box
          className={`"  ${
            isExpanded ? " flex col-span-3  " : "hidden"
          }   justify-start items-center"`}
        >
          Create New Note
        </Box>
      </Grid>
    </Button>
  );
};
