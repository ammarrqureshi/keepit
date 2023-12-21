import { Grid, Box, Button } from "@radix-ui/themes";
import { ReactNode } from "react";

type ItemProps = {
  icon: string;
  children: ReactNode,
  value:string
};

export const DrawerItem = ({ icon:Icon, children, value }: ItemProps) => {

  return (
    <Button variant="ghost" size="3">
      <Grid
        className="group-hover:grid-cols-4 w-full "
        px="4"
        py="2"
        columns="1"
        gap="4"
        width="100%"
      >
        <Box className="flex justify-center items-center ">{Icon && <Icon />}{children}
        </Box>
        <Box className="col-span-3 hidden group-hover:flex justify-start items-center">
          {value}
        </Box>
      </Grid>
    </Button>
  );
};
