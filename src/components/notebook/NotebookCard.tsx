import { Pencil1Icon, ReaderIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  Card,
  Heading,
  Separator,
  Flex,
  Tooltip,
  IconButton,
  AlertDialog,
  Button,
  Box,
} from "@radix-ui/themes";
import { NotebookType } from "@/types.type";
import { NoteCard } from "../note/NoteCard";

export const NotebookCard = (notebook: NotebookType) => {
  return (
    <Card id="notebook-card">
      <Box style={{ minHeight: 350, maxHeight: 350, minWidth: 300 }}>
        <div
          className={`absolute top-0 right-6 w-4 h-8 ${notebook.color} rounded-bl-lg`}
        ></div>
        <Flex direction="column">
          <Flex
            direction="column"
            gap="4"
            style={{ maxHeight: 300, overflow: "hidden" }}
          >
            <IconButton size="4" variant="soft">
              <ReaderIcon width="22" height="22" />
            </IconButton>
            <div className="text-wrap max-w-[60%] ">
              <Heading size="6" as="h3" trim="end">
                {notebook.title}
              </Heading>
            </div>

            <Separator mb="1" size="4" />
            {notebook.notes.map((note) => (
              <NoteCard title={note.title} note={note.note}></NoteCard>
            ))}
          </Flex>

          <Flex
            style={{
              width: "100%",
              padding: ".5rem",
              zIndex: "9999",
              bottom: ".2rem",
              left: "0",
              right: "0",
            }}
            id="notebook-actions"
            gap="3"
            justify="between"
            position="absolute"
          >
            <Button variant="outline">View Notebook</Button>
            <Flex gap="3">
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
        </Flex>
        {/* div below for overflow gradient */}
        <div className="w-full absolute bottom-0 inset-x-0 min-h-[5rem] bg-gradient-to-t from-[var(--color-panel-solid)] from-60%"></div>
      </Box>
    </Card>
  );
};
