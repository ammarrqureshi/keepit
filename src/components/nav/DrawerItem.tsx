import { ReaderIcon } from '@radix-ui/react-icons'
import { Grid, Box, Button } from '@radix-ui/themes'

export const DrawerItem = () => {
  return (
    <Button size="3" style={{padding: "0px"}}>
        <Grid
          className='group-hover:grid-cols-4 '
          px="4"
          py="2"
          columns="1"
          gap="4"
          width="auto"
        >
          <Box className="flex justify-center items-center ">
            <ReaderIcon width="22" height="22" />
          </Box>
          <Box className="col-span-3 hidden group-hover:flex justify-start items-center">
            All Notebooks
          </Box>
        </Grid></Button>
  )
}
