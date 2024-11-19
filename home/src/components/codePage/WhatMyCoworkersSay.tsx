import { Grid2 as Grid, Typography } from "@mui/material";
import { RoundedCard } from '../../shared/RoundedCard';
import { IconButtonLink } from "../../shared/IconButtonLink";

import LaunchIcon from '@mui/icons-material/Launch';

export const WhatMyCoworkersSay = () => {
    return <RoundedCard title={<Typography
        variant="h2"
        fontWeight={300}
        sx={{ paddingLeft: '28px', paddingBottom: '8px' }}
    >What my colleagues have said<IconButtonLink href="https://www.linkedin.com/in/luiscamachoiii/details/recommendations">
            <LaunchIcon />
        </IconButtonLink></Typography>}>
        <Grid container spacing={3} justifyContent='space-around' alignItems='center'>
            <Grid size={{ sm: 12, md: 6 }}>
                <Typography>"Luis is a great asset as a developer. I recommend him without hesitation.

                    He is dependable, fast and delivers quality software. He is also willing and able to take on work in unfamiliar domains; ask for help as necessary and get it done.

                    That plus his very engaging personality made him an integral member of our software team."</Typography>
            </Grid>
            <Grid size={{ sm: 12, md: 6 }}>
                <Typography >"As a project lead, I found Luis to be the easiest software developer to work with. If speed of development is your need, he is the one you need. He has got multiple years of Typescript and React experience. He has a great personality that goes along with his other virtues. If I have the opportunity, I will definitely hire him.
                    "</Typography>
            </Grid>

            <Grid>
                <Typography >"Luis has been a grade A human being, team member, and technology ace on my team at Homepoint. On day 2 Luis was willing and eager to engage on our project (front and back end), politely and effectively refactoring the Redux, fetch, and React hook/layout implementations. Furthermore, he graciously considered and accepted suggestions around Redux tooling and unit tests, integrating them seamlessly into his efforts. Luis has a great sense of humor, is willing to tackle the tough problems, is way too productive, and brings a great energy and vibe to the team!

                    Most importantly, Luis exemplifies what it means to be a consultant. His mastery over front end tech hasn't seemed to diminish his capacity to listen and understand issues and then work with leaders and teammates to complete tasks and make recommendations.

                    It's that combination of talent and professionalism that compels me to write this recommendation on Luis' behalf. It's been a genuine pleasure getting to know him as a developer, leader, partner, and person. I am very much looking forward to the privilege of continuing to have him on my team!
                    "</Typography>
            </Grid>
        </Grid>
    </RoundedCard>
}