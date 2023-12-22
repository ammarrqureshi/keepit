import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";

export const SearchBar = () => {
  return (
    <div>
      <TextField.Root>
        <TextField.Input placeholder="Search anything..." />
      </TextField.Root>
      <Button>
        <MagnifyingGlassIcon width="22" height="22" />
        Search
      </Button>
    </div>
  );
};
