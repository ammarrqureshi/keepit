import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Dialog,
  TextField,
  TextArea,
  Tooltip,
  Tabs,
  ScrollArea,
  Text,
  IconButton,
} from "@radix-ui/themes";
import { Cross1Icon, Pencil1Icon, Pencil2Icon } from "@radix-ui/react-icons";
import { NotebookCard } from "@components/notebook/NotebookCard";
import { Navbar } from "@components/nav/Navbar";
import { notebooks } from "./data";
import { Sidebar } from "@components/nav/Sidebar";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
    console.log("toggled")
  };
  return (
    <>
  
<Sidebar isVisible={isVisible}  toggleSidebar={toggleSidebar}></Sidebar>
      <Box px="2">
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        <Container size="3">
          <Section size="2">
            <Heading as="h2" size="8">
              Welcome to Keepit , Ammar{" "}
            </Heading>
          </Section>
          <Section size="2">
            <Tabs.Root defaultValue="all-notebooks">
              <Tabs.List>
                <Tabs.Trigger value="all-notebooks">All Notebooks</Tabs.Trigger>
                <Tabs.Trigger value="recent">Recent</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="all-notebooks">
                <ScrollArea
                  type="always"
                  scrollbars="horizontal"
                  className="h-full py-4"
                >
                  <Flex mt="4" gap="3" align="start" className="w-md">
                    {notebooks.map((notebook) => (
                      <NotebookCard {...notebook}></NotebookCard>
                    ))}
                  </Flex>
                </ScrollArea>
              </Tabs.Content>
            </Tabs.Root>
          </Section>
        </Container>
      </Box>

      <Dialog.Root>
        <Tooltip content="Add New Notebook">
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
        </Tooltip>
        <Dialog.Content className="relative" size="4">
          <Flex direction="column" gap="4">
            <Dialog.Title size="7">Add Notebook</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Add a new notebook to your notes
            </Dialog.Description>{" "}
            <label>
              <Text as="div" size="3" mb="1" weight="bold">
                Title
              </Text>
              <TextField.Input
                variant="surface"
                size="3"
                placeholder="Notebook title..."
              />{" "}
            </label>
            <label>
              <Text as="div" size="3" mb="1" weight="bold">
                Description
              </Text>
              <TextArea
                variant="surface"
                size="3"
                placeholder="Write something here..."
              />{" "}
            </label>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button size="3" variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button size="3">Add Notebook</Button>
              </Dialog.Close>
            </Flex>
          </Flex>
          <Dialog.Close>
            <IconButton
              className="absolute top-3 right-3"
              variant="ghost"
              color="gray"
            >
              <Cross1Icon width="18" height="18" />
            </IconButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}

export default App;
