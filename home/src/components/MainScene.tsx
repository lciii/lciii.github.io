import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Grid2 as Grid, IconButton, Stack, Typography } from '@mui/material';

const iconSize = '2em'

export const MainScene = () => {
    return <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 2 }} alignContent='center' justifyItems='center'>
            <Stack spacing={2} direction={{ xs: 'row', sm: 'column' }}>
                <IconButton><LinkedInIcon sx={{ fill: '#0a66c2', height: iconSize, width: iconSize }} /></IconButton>
                <IconButton><GitHubIcon sx={{ fill: 'black', height: iconSize, width: iconSize }} /></IconButton>
                <IconButton><FacebookIcon sx={{ fill: '#1877F2', height: iconSize, width: iconSize }} /></IconButton>
                <IconButton><YouTubeIcon sx={{ fill: '#FF0000', height: iconSize, width: iconSize }} /></IconButton>
            </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
            <Stack spacing={1}>
                <Typography variant="h3">Luis Camacho III</Typography>
                <Typography fontWeight={300}>I like to do lots of things.</Typography>
            </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
            <Box component="img" sx={{ borderRadius: '28px', inlineSize: '-webkit-fill-available' }} src="headshotFull.jpg"></Box>
        </Grid>
    </Grid>
}