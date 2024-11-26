import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Fade, Grid2 as Grid } from '@mui/material';
import { useLogos } from './useLogos';

export default function LogoCollection() {
  const logos = useLogos()
  const paths = Object.keys(logos) as (keyof typeof logos)[]
  console.log('logos, paths', logos, paths)
  return (
    <Box sx={{ backgroundColor: t => t.palette.background.paper }}>
      <Container sx={{ py: 4 }}>
        <Typography
          component="p"
          variant="subtitle2"
          align="center"
          sx={{ color: 'text.secondary', mb: 2 }}
        >
          15 years of great work done here
        </Typography>
        <Grid container spacing={6} sx={{ justifyContent: 'center', alignItems: 'center', mt: 0.5 }}>
          {paths.map((p, i) => (
            <Fade in timeout={i * 1000}>
              <Grid key={i}>
                <Box
                  component='img'
                  alt={`${i}`}
                  src={logos[p]}
                  style={{ maxHeight: "60px", maxWidth: '200px', minHeight: '27px' }}
                />
              </Grid>
            </Fade>
          ))}
        </Grid>
      </Container ></Box>
  );
}
