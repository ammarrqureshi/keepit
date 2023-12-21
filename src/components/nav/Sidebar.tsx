import { Flex } from "@radix-ui/themes";
import { DrawerItem } from "./DrawerItem";
import { DrawerSearchItem } from "./DrawerSearchItem";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Sidebar = () => {
  return (
    <div className="py-2 flex overflow-hidden flex-col justify-between h-full fixed z-[99999] group max-lg:hidden border-r border-gray-500/50">
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
    </div>

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
