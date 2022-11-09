import Header from 'src/components/layouts/Header';
import SideMenu from 'src/components/layouts/SideMenu';
import { Stack } from '@mui/material';
import dynamic from 'next/dynamic';

export const Frame = ({ children, fileStructure }) => {

  return (
    <Stack>
      <Header>
        Header
      </Header>
      <Stack maxWidth='60vw' direction='row'>
        <SideMenu fileStructure={fileStructure}>
          SideMenu
        </SideMenu>
        <Stack width='85vw'>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Frame;