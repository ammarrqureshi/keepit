import { Box, Flex, IconButton } from "@radix-ui/themes";
import { DrawerItem } from "./DrawerItem";
import { DrawerSearchItem } from "./DrawerSearchItem";
import { ChevronLeftIcon, PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { SidebarContext } from "./contexts/SidebarContext";
import { SidebarContextType } from "types.type";

// import * as NavigationMenu from "@radix-ui/react-navigation-menu";



export const Sidebar = () => {
  
  const {isExpanded, setIsExpanded} = useContext(SidebarContext) as  SidebarContextType
  return (
    <Box onMouseOver={()=> setIsExpanded(true)} onMouseOut={()=>setIsExpanded(false)} className={`py-2 bg-inherit h-full fixed z-[99999999] flex overflow-hidden flex-col justify-between group ${isExpanded ? "" : "max-lg:hidden"} border-r border-gray-500/50  `}>
     <div className={`absolute top-16 right-0  ${isExpanded ? "block" :"hidden"}`}>
      <IconButton variant="soft" onClick={()=>setIsExpanded(false)}>
        <ChevronLeftIcon width="18" height="18"/>
      </IconButton>
     </div>
      <div className="flex flex-col justify-between gap-20">
        <DrawerSearchItem />

        <Flex
          direction="column"
          gap="4"
          className={` row-start-2  max-w-[400px] bg-inherit z-50`}
        >
          <DrawerItem icon="ReaderIcon" value="All Notebooks">
            <ReaderIcon width="22" height="22" />
          </DrawerItem>
        </Flex>
      </div>
      <DrawerItem icon="PersonIcon" value="Logout">
        <PersonIcon width="22" height="22" />
      </DrawerItem>
    </Box>

    // <NavigationMenu.Root orientation="vertical">
    //   <NavigationMenu.List>
    //     <NavigationMenu.Item value="notebooks">
    //       <NavigationMenu.Trigger>
    //         <Button>
    //           <ReaderIcon width="20" height="20" />
    //           Notebooks
    //         </Button>
    //       </NavigationMenu.Trigger>
    //       <NavigationMenu.Content>
    //         <NavigationMenu.Sub>
    //           <NavigationMenu.List>
    //             <NavigationMenu.Item value="book summaries">
    //               <NavigationMenu.Trigger>
    //                 <Button>
    //                   <ReaderIcon width="20" height="20" />
    //                   Book summaries
    //                 </Button>
    //               </NavigationMenu.Trigger>
    //               <NavigationMenu.Content></NavigationMenu.Content>
    //             </NavigationMenu.Item>
    //           </NavigationMenu.List>
    //           <NavigationMenu.Viewport />
    //         </NavigationMenu.Sub>
    //       </NavigationMenu.Content>
    //     </NavigationMenu.Item>

    //     <NavigationMenu.Indicator />
    //   </NavigationMenu.List>

    //   <NavigationMenu.Viewport />
    // </NavigationMenu.Root>
  );
};
