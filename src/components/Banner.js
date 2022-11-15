import { Stack, Typography, Chip } from '@mui/material';

const Banner = () => {
  return (
    <Stack sx={{textAlign: 'center'}} mb='20px'>
      <div>
        <Chip label='Beta 1.0' color='primary' sx={{fontSize: '16px', mt: '40px', mb: '10px'}} />
      </div>
      <Typography sx={{fontSize: '48px', fontWeight: '700', mt: '10px', mb: '20px'}}>
        ESG Lens Reports
      </Typography>
      <Typography sx={{fontSize: '16px', color: '#6B87A2', mb: '10px'}}>
        ESG Lens Reports is a new kind of data-driven reporting interface
      </Typography>
      <Typography sx={{fontSize: '16px', color: '#6B87A2', mb: '40px'}}>
        that’s built for creating evidence-based, sharable, and reusable reports linked to ESG Lens data and analytics.
      </Typography>
    </Stack>
  )
};

export default Banner;