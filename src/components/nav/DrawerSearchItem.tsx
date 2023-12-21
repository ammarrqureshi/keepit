import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Box, Grid, TextField } from '@radix-ui/themes'
import React from 'react'

export const DrawerSearchItem = () => {
  return (
    <Grid
    className="group-hover:grid-cols-4"
    px="4"
    py="2"
    columns="1"
    gap="2"
    width="auto"
  >
    <Box className="flex justify-center items-center">
      <MagnifyingGlassIcon width="22" height="22" />
    </Box>
    <Box className="col-span-3 hidden group-hover:flex justify-start items-center">
      <TextField.Root className="max-w-[150px]">
        <TextField.Input
          variant="surface"
          size="3"
          placeholder="Notebook title..."
        />{" "}
      </TextField.Root>
    </Box>
  </Grid>
  )
}
