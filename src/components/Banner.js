import { Stack, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Stack sx={{textAlign: 'center'}} mb='20px'>
      <Typography sx={{fontSize: '48px', fontWeight: '700', mt: '40px', mb: '20px'}}>
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography sx={{fontSize: '16px', color: '#6B87A2', mb: '40px'}}>
        Id magnam porro aut debitis autem sit dolorem soluta ea dolorum repellat. Sit placeat quia eos modi sint sed ducimus iste ut laboriosam repellendus sit iste laboriosam?
      </Typography>
    </Stack>
  )
};

export default Banner;