import { ReaderIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Sidebar = () => {
  return (
    <NavigationMenu.Root orientation="vertical">
      <NavigationMenu.List>
        <NavigationMenu.Item value="notebooks">
          <NavigationMenu.Trigger>
            <Button>
              <ReaderIcon width="20" height="20" />
              Notebooks
            </Button>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Sub>
              <NavigationMenu.List>
                <NavigationMenu.Item value="book summaries">
                  <NavigationMenu.Trigger>
                    <Button>
                      <ReaderIcon width="20" height="20" />
                      Book summaries
                    </Button>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content></NavigationMenu.Content>
                </NavigationMenu.Item>
              </NavigationMenu.List>
              <NavigationMenu.Viewport />
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};
