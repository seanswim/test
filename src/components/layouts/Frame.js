import Header from 'src/components/layouts/Header';
import SideMenu from 'src/components/layouts/SideMenu';
import { Stack } from '@mui/material';

export const Frame = ({ children, banner, fileStructure }) => {

  return (
    <Stack>
      <Header />
      {banner}
      <Stack direction='row' justifyContent='center' spacing={15}>
        <SideMenu fileStructure={fileStructure} />
        <Stack>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Frame;