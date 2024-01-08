import { NotebookCard } from "@/components/notebook/NotebookCard"
import { notebooks } from "@/data"
import { Flex, Heading } from "@radix-ui/themes"

export const Notebooks = () => {
  return (
    <div>
      <Heading>
        All Notebooks </Heading>
      <Flex gap="2" wrap="wrap">
        {notebooks.map((notebook) => (
          <NotebookCard {...notebook}></NotebookCard>
        ))}
      </Flex>
    </div>
  )
}
