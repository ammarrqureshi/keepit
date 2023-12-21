import { ReaderIcon } from '@radix-ui/react-icons'
import { Button, Grid, Box } from '@radix-ui/themes'
import React from 'react'

export const DrawerItem = () => {
  return (
    <Button variant="ghost">
        <Grid
          className='group-hover:grid-cols-4 bg-green-500'
          px="4"
          py="2"
          columns="1"
          gap="4"
          width="auto"
        >
          <Box className="flex justify-start items-center bg-orange-500">
            <ReaderIcon width="22" height="22" />
          </Box>
          <Box className="col-span-3 hidden group-hover:flex justify-center items-center">
            All Notebooks
          </Box>
        </Grid>
      </Button>
  )
}
