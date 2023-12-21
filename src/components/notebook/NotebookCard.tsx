import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import {
  Card,
  Heading,
  Separator,
  Flex,
  Tooltip,
  IconButton,
  AlertDialog,
  Button,
  Text,
  Box,
} from "@radix-ui/themes";
import { NotebookType } from "@/types.type";

export const NotebookCard = (notebook: NotebookType) => {
  return (
    <Card id="notebook-card">
      <Box style={{ minHeight: 350, maxHeight: 350, minWidth: 300 }}>
        <Flex direction="column">
          <Flex
            direction="column"
            style={{ maxHeight: 300, overflow: "hidden" }}
          >
            <div className="text-wrap max-w-[60%] ">
              <Heading size="6" as="h3" trim="end">
                {notebook.title}
              </Heading>
            </div>

            <Separator my="4" size="4" />
            <Text className="overflow-hidden h-full">
              {notebook.description}
            </Text>
          </Flex>

          <Flex
            style={{
              right: ".2rem",
              background: "inherit",
              padding: ".5rem",
              zIndex: "9999",
              bottom: ".2rem",
            }}
            id="notebook-actions"
            gap="3"
            position="absolute"
          >
            <Tooltip content="Edit">
              <IconButton variant="outline">
                <Pencil1Icon width="18" height="18" />
              </IconButton>
            </Tooltip>

            {/* DELETE NOTEBOOK ALERT CODE */}

            <AlertDialog.Root>
              <Tooltip content="Delete">
                <AlertDialog.Trigger>
                  <IconButton variant="outline" color="red">
                    <TrashIcon width="18" height="18" />
                  </IconButton>
                </AlertDialog.Trigger>
              </Tooltip>
              <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Delete Notebook</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure? You are going to delete this notebook
                  permanently.
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button variant="solid" color="red">
                      Delete Notebook
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </Flex>
        </Flex>
        <div className="w-full absolute bottom-0 inset-x-0 min-h-[10rem] bg-gradient-to-t from-[var(--color-panel-solid)] from-40%"></div>
      </Box>
    </Card>
  );
};
