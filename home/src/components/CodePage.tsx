import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Box, Card, CardContent, Grid2 as Grid, IconButton, Paper, Stack, Typography } from "@mui/material"
import { SubPage } from "../shared/SubPage"
import { Row } from '../shared/Row';
import { PropsWithChildren } from 'react';

const iconSize = '1em'

const GridCard = ({ children }: PropsWithChildren) => {
    return <Grid size={{ sm: 12, md: 6 }}>
        <Card elevation={0} variant='outlined' sx={{ borderRadius: '28px' }}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </Grid>
}

export const CodePage = () => {
    return <SubPage>
        <Stack spacing={3}>
            <Row spacing={1}>
                <Typography variant="h2">Your friendly, neighborhood, full-stack engineer!</Typography>
                <IconButton href="https://www.linkedin.com/in/luiscamachoiii/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fill: '#0a66c2', height: iconSize, width: iconSize }} />
                </IconButton>
            </Row>
            <Grid container spacing={3}>
                <GridCard>
                    <Stack spacing={2}>
                        <Typography>Who I've worked for</Typography>
                        <Box component="img" src="Thomson_Reuters_logo.png" alt="" width={200} />
                    </Stack>
                </GridCard>
                <GridCard>
                    <Typography>What I know</Typography>
                </GridCard>
                <GridCard>
                    <Typography>What I've done</Typography>
                </GridCard>
            </Grid>
        </Stack>
    </SubPage>
}