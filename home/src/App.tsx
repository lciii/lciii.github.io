import React from 'react';
import logo from './logo.svg';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';

//inspo: https://kenjimmy.xyz/

function App() {
  return (
    <Box sx={{
      height: '100%', width: '100%',
      backgroundColor: t => t.palette.background.default
    }}>
      <Container maxWidth="md">
        <Stack justifyContent='center' alignItems='center' height="100vh">
          <Paper sx={{ padding: '40px' }} elevation={3}>
            <Stack spacing={1}>
              <Typography variant='h3' sx={{ marginBottom: '20px' }}>
                Hello!
              </Typography>
              <Typography variant='h4' fontWeight={300}>
                I'm Luis Camacho III and I like to do lots of things.
              </Typography>
              <Typography variant='body1'>Husband/Father</Typography>
              <Typography variant='body1'>Software Engineer</Typography>
              <Typography variant='body1'>Teacher</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
