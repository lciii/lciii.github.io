import { Box, Stack, Typography } from '@mui/material';
import { Row } from '../shared/Row';
import { Outlet } from 'react-router-dom';

export const MainScene = () => {
    return <Row spacing={4}>
        <Stack spacing={2}>
            <Box>LinkedIn</Box>
            <Box>Github</Box>
            <Box>Facebook</Box>
            <Box>Youtube</Box>
        </Stack>
        <Stack spacing={1}>
            <Typography variant="h3">Luis Camacho III</Typography>
            <Typography variant='h4' fontWeight={300} width="400px">I like to do lots of things.</Typography>
        </Stack>
        <Outlet />
        <Box>
            <img src="closeHeadshot.JPG" alt="" />
        </Box>
    </Row>
}