import Header from 'src/components/layouts/Header';
import SideMenu from 'src/components/layouts/SideMenu';
import { Stack } from '@mui/material';

export const Frame = ({ children, fileStructure }) => {

  return (
    <Stack>
      <Header />
      <Stack direction='row' justifyContent='center' spacing={15}>
        <SideMenu fileStructure={fileStructure} />
        <Stack width='800px'>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Frame;