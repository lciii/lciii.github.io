import { Grid2 as Grid, Stack } from "@mui/material";
import { RoundedCard } from '../../shared/RoundedCard';
import { SubPage } from "../../shared/SubPage";
import { WhatIKnow } from './WhatIKnow';
import { WhatMyCoworkersSay } from "./WhatMyCoworkersSay";
import { WhoIWorkedFor } from "./WhoIWorkedFor";
import { Video } from "../../shared/Video";

//https://www.linkedin.com/in/luiscamachoiii/details/recommendations/

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/s-nnV2BYdBM?si=TojRF7cgrR4ZGwZt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }

export const CodePage = () => {
    return <SubPage>
        <Stack spacing={3}>
            <Grid container spacing={3}>
                <Grid size={12}>
                    <WhoIWorkedFor />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <WhatIKnow />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <RoundedCard title="What I've done">
                        <Stack spacing={2}>
                            <Video src="https://www.youtube.com/embed/C-87bT6vvAg" />
                            <Video src="https://www.youtube.com/embed/s-nnV2BYdBM" />
                        </Stack>
                    </RoundedCard>
                </Grid>
                <Grid>
                    <WhatMyCoworkersSay />
                </Grid>
            </Grid>
        </Stack>
    </SubPage>
}