import { Box, Grid2 as Grid, Typography } from "@mui/material";
import { SubPage } from "../shared/SubPage";

export const BioPage = () => {
    return <SubPage>
        <Grid container>
            <Grid size={{ sm: 12, md: 6 }}>
                <Typography>This is a bunch of stuff about me!</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <Box
                    sx={{
                        borderRadius: 4,
                        alignSelf: 'center',
                        width: '-webkit-fill-available'
                    }}
                    component="img"
                    src="family.jpg" alt="" /></Grid>

        </Grid>
    </SubPage>
}