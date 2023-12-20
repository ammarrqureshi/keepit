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
  Inset,
} from "@radix-ui/themes";
import { NotebookType } from "types.type";

export const NotebookCard = (notebook: NotebookType) => {
  return (
    <Card id="notebook-card" className="max-sm:min-w-[50%] min-w-[33%] min-h-[300px] max-h-[70%]">
      <Flex className="bg-orange-500">
        <Inset
          className="min-w-[2rem] max-w-[2rem]"
          clip="border-box"
          side="left"
          pr="current"
        >
          <img
            src="https://www.photos-public-domain.com/wp-content/uploads/2011/11/lime-green-painted-wall-texture-600x400.jpg"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100px",
              height: "100%",

              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Flex  direction="column">
          <div className="text-wrap max-w-[60%] ">
            <Heading size="6" as="h3" trim="end">
              {notebook.title}
            </Heading>
          </div>

          <Separator my="3" size="4" />
          <Text className="overflow-hidden h-full">{notebook.description}</Text>
          <Flex
            style={{
              right: ".2rem",
              background: "auto",
              padding: ".5rem",
              zIndex: "999",
              top: ".2rem",
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
      </Flex>
    </Card>
  );
};
