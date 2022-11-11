import Header from 'src/components/layouts/Header';
import SideMenu from 'src/components/layouts/SideMenu';
import { Stack } from '@mui/material';

export const Frame = ({ children, fileStructure }) => {

  return (
    <Stack>
      <Header />
      <Stack maxWidth='60vw' direction='row'>
        <SideMenu fileStructure={fileStructure}>
          Table of contents
        </SideMenu>
        <Stack width='85vw'>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Frame;