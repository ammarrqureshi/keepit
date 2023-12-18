import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  IconButton,
  Section,
  Separator,
  Text,
  Avatar,
  Dialog,
  TextField,
  TextArea,
  AlertDialog,
} from "@radix-ui/themes";
import {
  MoonIcon,
  Pencil1Icon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { NotebookRings } from "./NotebookRings";

function App() {
  return (
    <>
      <Box>
        <Flex id="nav" justify="between">
          <IconButton variant="ghost">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </IconButton>
          <a href="">
            <Flex justify="between" align="center" id="brand-logo" gap="2">
              <IconButton>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </IconButton>

              <Heading>Keepit</Heading>
            </Flex>
          </a>
          <Flex gap="4" justify="between" align="center">
            <IconButton variant="outline">
              <MoonIcon width="18" height="18" />
            </IconButton>
            <Avatar
              radius="medium"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
          </Flex>
        </Flex>

        <Container size="3">
          <Section size="2">
            <Heading as="h2" size="8">
              Welcome to Keepit , Ammar{" "}
            </Heading>
          </Section>
          <Section size="2">
            <Flex wrap="wrap" gap="3" justify="between" align="center">
              <Card id="notebook-card" style={{ position: "relative" }}>
                <NotebookRings notebookHeight={9}></NotebookRings>

                <Heading size="6" as="h3">
                  This is the title
                </Heading>
                <Separator my="3" size="4" />
                <Text>
                  Te text for te lorem imps uemTe text for te lorem imps uem Te
                  text for te lorem imps uem Te text for te lorem imps uem Te
                  text for te lorem imps uemTe text for te lorem imps uem Te
                  text for te lorem imps uem Te text for te lorem imps uem Te
                  text for te lorem imps uemTe text for te lorem imps uem Te
                  text for te lorem imps uem
                </Text>
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
                  <IconButton variant="outline">
                    <Pencil1Icon width="18" height="18" />
                  </IconButton>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <IconButton variant="outline" color="red">
                        <TrashIcon width="18" height="18" />
                      </IconButton>
                    </AlertDialog.Trigger>
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
              </Card>
            </Flex>
          </Section>
        </Container>
      </Box>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button
            style={{ position: "fixed", bottom: "1rem", right: "1rem" }}
            variant="solid"
            className=""
          >
            <Pencil2Icon width="20" height="20" />
            Add Notebook{" "}
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Flex direction="column" gap="4">
            <Dialog.Title>Add Notebook</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Add a new notebook to your notes
            </Dialog.Description>{" "}
            <TextField.Input size="3" placeholder="Notebook title..." />{" "}
            <TextArea size="3" placeholder="Write something here..." />{" "}
            <Dialog.Close>
              <Button size="4">Add Notebook</Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="4" variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}

export default App;
