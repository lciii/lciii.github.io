import { Box, Container, Paper, Stack } from '@mui/material';
import { MainScene } from './components/MainScene';
import { TopRow } from './components/TopRow';

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
              <TopRow />
              <MainScene />
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
