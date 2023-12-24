import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";

export const SearchBar = ({className}:{className:string}) => {
  return (
    <div className={`flex w-full ${className}`}>
      <TextField.Root>
        <TextField.Input placeholder="Search anything..." />
      </TextField.Root>
      <Button>
        Search
        <MagnifyingGlassIcon width="20" height="20" />
      </Button>
    </div>
  );
};
