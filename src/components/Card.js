import { Card, Stack, Typography } from '@mui/material';
import defaultImg from 'src/image/default.png';
import Image from 'next/image';

const CustomCard = ({thumbnail, title, category, link}) => {
  thumbnail = thumbnail || defaultImg;

  return (
    <Card
      sx={{
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '2px 3px 3px grey',
        },
      }}
      onClick={() => window.location.href=link}
    >
      <Stack>
        <Stack>
          <Image 
            src={thumbnail} 
            alt={'card'} 
            width={250}
          />
        </Stack>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '14px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: '10px 15px 0px 15px'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'grey',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: '0px 0px 15px 15px'
          }}
        >
          {category}
        </Typography>
      </Stack>
    </Card>
  )
};

export default CustomCard;