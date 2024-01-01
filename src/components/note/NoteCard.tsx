import { Card, Text } from "@radix-ui/themes";

interface NoteProps {
  title: string;
  note: string;
}
export const NoteCard = ({ title, note }: NoteProps) => {
  return (
    <div>
      <Card asChild style={{ maxWidth: 350 , borderRadius: "50px"}}>
        <a href="#">
          <Text as="div" size="2" weight="bold">
            {title}
          </Text>
          <Text as="div" color="gray" size="2">
            {note}
          </Text>
        </a>
      </Card>
    </div>
  );
};
