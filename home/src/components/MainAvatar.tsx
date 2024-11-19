import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Box, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { IconButtonLink } from '../shared/IconButtonLink';
import { Row } from '../shared/Row';

export const MainAvatar = () => {
    return <Stack spacing={0}>
        <RouteLink to="/" style={{ alignSelf: 'center' }}>
            <Box component="img" src="headshotCircle.png" alt="" height="250px" />
        </RouteLink>
        <Typography variant="h1" fontWeight={500}>Luis Camacho III</Typography>
        <Typography >Your friendly, neighborhood, software engineer!</Typography>
        <Grid container justifyContent='space-between'>
            <Grid container>
                <Grid>
                    <IconButtonLink href="https://www.facebook.com/LCamachoIII">
                        <FacebookIcon sx={{ fill: '#1877F2' }} />
                    </IconButtonLink>
                </Grid>
                <Grid>
                    <IconButtonLink href="https://www.linkedin.com/in/luiscamachoiii/">
                        <LinkedInIcon sx={{ fill: '#0a66c2' }} />
                    </IconButtonLink>
                </Grid>
                <Grid>
                    <IconButtonLink href="https://github.com/lciii">
                        <GitHubIcon sx={{ fill: 'black' }} />
                    </IconButtonLink>
                </Grid>
                <Grid>
                    <IconButtonLink href="https://youtube.com/playlist?list=PL75NYWDJQHD_8eqxU_tx7eozlIQ0hWM4M&si=DWEg-BobiKQ2VnDJ">
                        <YouTubeIcon sx={{ fill: '#FF0000' }} />
                    </IconButtonLink>
                </Grid>
            </Grid>
            <Link href='mailto:luiscamachoiii@gmail.com' underline='none'>
                <Typography >luiscamachoiii@gmail.com</Typography>
            </Link>
        </Grid>
    </Stack>
}