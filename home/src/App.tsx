import React from 'react';
import logo from './logo.svg';
import { Box, Container, Stack, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Stack justifyContent='center' alignItems='center' height="100vh">
        <Box>
          <Typography variant='h3' fontWeight={300} sx={{ marginBottom: 4 }}>
            Hello!
          </Typography>
          <Typography variant='h3' fontWeight={300}>
            I am Luis Camacho III and I like to do lots of things.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
