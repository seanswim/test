import Header from 'src/components/layouts/Header';
import SideMenu from 'src/components/layouts/SideMenu';
import { Stack } from '@mui/material';

export const Frame = ({ children }) => {
  return (
    <Stack>
      <Header>
        Header
      </Header>
      <Stack direction='row'>
        <SideMenu>
          SideMenu
        </SideMenu>
        <Stack>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Frame;