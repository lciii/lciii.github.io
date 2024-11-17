import { Box, Container, Paper, Stack } from '@mui/material';
import { MainScene } from './components/MainScene';
import { TopRow } from './components/TopRow';

//inspo: https://kenjimmy.xyz/

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingY: 4 }} >
        <Paper sx={{ padding: '40px', borderRadius: '28px' }} elevation={3}>
          <Stack spacing={3}>
            <TopRow />
            <MainScene />
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
