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
} from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { NotebookCard } from "@components/notebook/NotebookCard";
import { Navbar } from "@components/nav/Navbar";

function App() {
  return (
    <>
      <Box>
        <Navbar></Navbar>\{" "}
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
                  scrollbars="vertical"
                  style={{ height: 500 }}
                >
                  <Flex
                    mt="4"
                    wrap="wrap"
                    gap="3"
                    justify="center"
                    align="center"
                  >
                    <NotebookCard></NotebookCard>
                    <NotebookCard></NotebookCard>
                    <NotebookCard></NotebookCard>
                    <NotebookCard></NotebookCard>
                    <NotebookCard></NotebookCard>
                    <NotebookCard></NotebookCard> <NotebookCard></NotebookCard>{" "}
                    <NotebookCard></NotebookCard> <NotebookCard></NotebookCard>
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
        <Dialog.Content size="4">
          <Flex direction="column" gap="4">
            <Dialog.Title size="7">Add Notebook</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Add a new notebook to your notes
            </Dialog.Description>{" "}
            <TextField.Input
              variant="soft"
              size="3"
              placeholder="Notebook title..."
            />{" "}
            <TextArea
              variant="soft"
              size="3"
              placeholder="Write something here..."
            />{" "}
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
