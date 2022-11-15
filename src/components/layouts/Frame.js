import Header from 'src/components/layouts/Header';
import SideMenu from 'src/components/layouts/SideMenu';
import { Stack } from '@mui/material';

export const Frame = ({ children, banner, fileStructure }) => {

  return (
    <Stack>
      <Header />
      {banner}
      <Stack 
        direction='row' 
        justifyContent='center'
        spacing={8}
        sx={{
          minWidth: '1200px',
          width: '100%',
        }}
      >
        <SideMenu fileStructure={fileStructure} />
        <Stack sx={{
          width: '900px',
        }}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Frame;