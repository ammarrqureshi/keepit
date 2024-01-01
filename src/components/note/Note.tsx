interface NoteProps {
  title: string;
  note: string;
}
export const Note = ({ title, note }: NoteProps) => {
  return (
    <div>
      <h1> {title}</h1>

      {note}
    </div>
  );
};
