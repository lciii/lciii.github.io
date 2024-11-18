import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Row } from "../shared/Row";
import { SubPage } from "../shared/SubPage";

const iconSize = '1em'

//https://www.facebook.com/LCamachoIII

export const BioPage = () => {
    return <SubPage>
        <Stack spacing={3}>
            <Row spacing={2}>
                <Typography variant="h2">About Me</Typography>
                <IconButton href="https://www.facebook.com/LCamachoIII" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon sx={{ fill: '#1877F2', height: iconSize, width: iconSize }} />
                </IconButton>
            </Row>
            <Typography>This is a bunch of stuff about me!</Typography>
            <Box
                sx={{
                    borderRadius: 4,
                    alignSelf: 'center',
                }}
                component="img"
                src="family.jpg" alt="" />
        </Stack>
    </SubPage>
}