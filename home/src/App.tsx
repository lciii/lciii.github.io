
import EngineeringIcon from '@mui/icons-material/Engineering';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import { Box, Container, Paper } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { HeaderButton } from './components/HeaderButton';
import { MainAvatar } from './components/MainAvatar';
import { Row } from './shared/Row';

//inspo: https://kenjimmy.xyz/
//https://react-type-animation.netlify.app/examples
//https://tobiasahlin.com/moving-letters/
// https://www.typeitjs.com/


function App() {
  const { pathname } = useLocation()
  const subPageOpen = pathname !== '/'
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingY: 4 }} >
        <Paper sx={{ padding: '40px', borderRadius: '28px', position: 'relative', zIndex: 1 }} elevation={subPageOpen ? 1 : 0}>
          <Row justifyContent="space-between">
            <MainAvatar />
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
