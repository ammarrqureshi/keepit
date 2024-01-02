import { Pencil1Icon } from "@radix-ui/react-icons";
import { Card, IconButton, Text, Tooltip } from "@radix-ui/themes";

interface NoteProps {
  title: string;
  note: string;
}
export const NoteCard = ({ title, note }: NoteProps) => {
  return (
    <Card className="group" asChild style={{ maxWidth: 350 }}>
      <a href="#">
        <div className="rounded-md max-h-10 truncate max-w-px">
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
          <Text as="div" color="gray" size="2">
            {note}
          </Text>
        </div>
        <div className="absolute flex right-2 top-2 hidden group-hover:flex">
          <Tooltip content="Edit">
            <IconButton variant="outline">
              <Pencil1Icon width="18" height="18" />
            </IconButton>
          </Tooltip>
        </div>
      </a>
    </Card>
  );
};
