import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Fade } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Luis Camacho III
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            <TypeAnimation
              sequence={[
                'Your friendly, neighborhood, software engineer!',
                1000,
                'Your friendly, neighborhood, public speaker!',
                1000,
                'Your friendly, neighborhood, father of four!',
                1000,
                'Your friendly, neighborhood, musician!',
                1000,
                'Let\'s chat! luiscamachoiii@gmail.com',
                1000,
              ]}
              speed={40}
            />
          </Typography>
          <Fade in timeout={2000}>
            <Box component="img" src="headshotCircle.png" alt="" height="350px" />
          </Fade>
        </Stack>
      </Container>
    </Box>
  );
}
