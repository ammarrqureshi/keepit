import { Card, Text } from "@radix-ui/themes";

interface NoteProps {
  title: string;
  note: string;
}
export const NoteCard = ({ title, note }: NoteProps) => {
  return (
    <Card asChild style={{ maxWidth: 350 }}>
      <a href="#">
        <div className="rounded-md max-h-10 truncate max-w-px">
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
          <Text as="div" color="gray" size="2">
            {note}
          </Text>
        </div>
      </a>
    </Card>
  );
};
