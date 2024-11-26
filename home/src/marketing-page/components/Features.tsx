import { Link, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const sideImages = ['speaking.png', 'guitar.png', 'stage.png']

export default function Features() {
  return (
    <Container sx={{ py: { xs: 4, sm: 8 } }}>
      <Stack spacing={2}>
        <Box sx={{ width: { sm: '100%', md: '60%', alignSelf: 'center' } }}>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: 'text.primary' }}
          >
            A little about me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', mb: { sm: 2 } }}
          >
            I've been a fullstack software engineer for over 14 years building awesome web and desktop applications.
            I also love public speaking and teaching, which I do a lot of at <Link href="https://www.hometownchurch.com/" target="_blank" rel="noopener noreferrer">Hometown Church</Link>.
            I currently live in Apple Valley with my wife and 4 kiddos--and I'm not too bad at the guitar.
          </Typography>
        </Box>
        <Stack
          spacing={2}
          direction={{ xs: 'column', sm: 'row-reverse' }}
        >
          <Stack
            spacing={2}
            justifyContent='space-between'
          >
            {sideImages.map(s =>
              <Box
                key={s}
                sx={{
                  borderRadius: 4,
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                component="img"
                src={s} alt="" />
            )}
          </Stack>
          <Box
            sx={{
              borderRadius: 4,
              maxWidth: { xs: '100%', sm: '50vw' },
              maxHeight: '100%',
            }}
            component="img"
            src="family.jpg"
            alt=""
          />
        </Stack>
      </Stack>
    </Container>
  );
}