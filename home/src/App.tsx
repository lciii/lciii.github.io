import EngineeringIcon from '@mui/icons-material/Engineering';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HeaderButton } from './components/HeaderButton';
import { Row } from './shared/Row';

//inspo: https://kenjimmy.xyz/

function App() {
  const { pathname } = useLocation()
  const subPageOpen = pathname !== '/'
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingY: 4 }} >
        <Paper sx={{ padding: '40px', borderRadius: '28px', position: 'relative', zIndex: 1 }} elevation={subPageOpen ? 1 : 0}>
          <Row justifyContent="space-between">
            <Stack spacing={2} alignItems="center">
              <Link to="/">
                <Box component="img" src="headshotCircle.png" alt="" height="250px" />
              </Link>
              <Typography variant="h1">Luis Camacho III</Typography>
            </Stack>
            <HeaderButton
              title="Husband/Father"
              link="bio"
              timeout={1000}
            ><FamilyRestroomIcon /></HeaderButton>
            <HeaderButton
              title="Software Engineer"
              link="code"
              timeout={2000}><EngineeringIcon /></HeaderButton>
            <HeaderButton
              title="Teacher"
              link="teacher"
              timeout={3000}><SportsMartialArtsIcon /></HeaderButton>
          </Row>
        </Paper>
        <Outlet />
      </Box>
    </Container>
  );
}

export default App;
