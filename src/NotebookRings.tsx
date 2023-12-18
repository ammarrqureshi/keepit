import { MinusIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";

interface notebookRingsProps {
  notebookHeight: number;
}
export const NotebookRings = ({ notebookHeight }: notebookRingsProps) => {
  const rings: JSX.Element[] = [];
  for (let i = 1; i <= notebookHeight; i++) {
    rings.push(<MinusIcon height="18" width="18" />);
  }
  return (
    <div>
      <Flex direction="column" position="absolute" style={{ left: "-0.7rem" }}>
        {" "}
        {rings}
      </Flex>
    </div>
  );
};
