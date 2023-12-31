import { NotebookCard } from "@/components/notebook/NotebookCard";
import { SearchBar } from "@/components/search/SearchBar";
import { notebooks } from "@/data";
import {
  Section,
  Heading,
  Tabs,
  ScrollArea,
  Flex,
  Box,
} from "@radix-ui/themes";

export const Home = () => {
  return (
    <Box>
      <Section size="2" style={{ paddingBottom: '0px' }}>
        <Heading as="h2" size="8">
          Welcome to Keepit , Ammar{" "}
        </Heading>
        <SearchBar className="mt-4 " />
      </Section>
      <Section size="2">
        <Tabs.Root defaultValue="all-notebooks">
          <Tabs.List>
            <Tabs.Trigger value="all-notebooks">All Notebooks</Tabs.Trigger>
            <Tabs.Trigger value="recent">Recent</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="all-notebooks">
            <div className="h-full z-[99] absolute right-0 inset-y-0 min-w-[3rem] bg-gradient-to-l from-[var(--color-page-background)] from-20%"></div>

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
      </Section></Box>
  );
};
