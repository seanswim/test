import Logo from 'src/image/logo.svg';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';

export const Header = ({ children }) => {
  return (
    <Stack 
      sx={{
        with: '100%',
        borderBottom: '1px solid rgb(214, 222, 230)', 
        backgroundColor: 'white',
        padding: '10px 20px', 
        position: 'sticky',
        top: '0px',
        zIndex: '999',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
      <Stack
        spacing={2}
        direction='row' 
        sx={{
          maxWidth: '1200px',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Image 
          src={Logo} 
          width={120}
          alt='logo'
          onClick={() => window.location.href = 'https://www.fairlabs.io'}
          style={{cursor: 'pointer'}}
        />
        <Link
          href='/'
        >
          <Typography 
            variant='h6'
            sx={{cursor: 'pointer'}}
          >
            Blog
          </Typography>
        </Link>
        {children}
      </Stack>
    </Stack>
  )
}

export default Header;