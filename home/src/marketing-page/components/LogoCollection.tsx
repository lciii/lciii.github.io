import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { Fade, Grid2 as Grid } from '@mui/material';

const logos = [
  'RunSafe_Logo_SVG.svg',
  'IntertechLogo.png',
  'deepcellLogo.svg',
  'homepointLogo.svg',
  'rsmLogo.png',
  'Emerson_Electric_Company.png',
  'Thomson_Reuters_logo.png'
];


export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary', mb: 2 }}
      >
        With great work done here
      </Typography>
      <Grid container spacing={6} sx={{ justifyContent: 'center', alignItems: 'center', mt: 0.5 }}>
        {logos.map((logo, i) => (
          <Fade in timeout={i * 1000}>
            <Grid key={i}>
              <Box
                component='img'
                alt=""
                src={logo}
                style={{ maxHeight: "60px", maxWidth: '200px' }}
              />
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
}
