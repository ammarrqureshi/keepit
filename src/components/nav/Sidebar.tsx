import { Flex, TextField } from "@radix-ui/themes";
import { DrawerItem } from "./DrawerItem";
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Sidebar = () => {
  return (
    <div className="grid overflow-hidden grid-rows-auto justify-between h-full fixed group bg-orange-100">
      <div className="hidden group-hover:block">
      <TextField.Root >
        <TextField.Input
          variant="surface"
          size="3"
          placeholder="Notebook title..."
        />{" "}
      </TextField.Root>
      </div>
    

      <Flex
        direction="column"
        gap="4"
        className={`bg-green-100 row-start-2 overflow-hidden max-w-[400px] bg-inherit z-50`}
      >
        <DrawerItem></DrawerItem>
        <DrawerItem></DrawerItem>
        <DrawerItem></DrawerItem>
        <DrawerItem></DrawerItem>
        <DrawerItem></DrawerItem>
        <DrawerItem></DrawerItem>
      </Flex>
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
