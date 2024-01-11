import { notebooks } from "@/data";
import { Box, Grid, Heading } from "@radix-ui/themes";
import { NoteItem } from "./NoteItem";

export const NotebookPage = () => {
  return (
    <div>
      <Grid columns="2" gap="0" width="auto">
        <Box className="bg-orange-500" width="auto" shrink="1">
          <Heading as="h2" size="3">
            Book summary
          </Heading>
          {notebooks.map((notebook) =>
            notebook.notes.map((note) => (
              <NoteItem title={note.title} note={note.note}></NoteItem>
            )),
          )}
        </Box>
        <Box className="bg-slate-500">Notes Area</Box>
      </Grid>
    </div>
  );
};
