import StarIcon from '@mui/icons-material/Star';
import { Chip, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { Image } from '../shared/Image';
import { RoundedCard } from '../shared/RoundedCard';
import { SubPage } from "../shared/SubPage";

//https://www.linkedin.com/in/luiscamachoiii/details/recommendations/

const companies = ['runsafeLogo.png', 'IntertechLogo.png', 'Emerson_Electric_Company.png', 'Thomson_Reuters_logo.png']

const webSkills = {
    Typescript: 3,
    'HTML/CSS': 3,
    Javascript: 3,
    React: 3,
    Redux: 3,
    Cypress: 3,
    Jest: 3,
    Vitest: 2,
    'React Testing Library': 2,
    'Enzyme': 1,
    MUI: 3,
    NextJs: 2,
    Angular: 1,
    Formik: 2,
    'plotly-js': 3,
    axios: 2,
    'Chakra UI': 1,
    'react-table': 2,
    'react-query': 2,
    'SQL': 3,
    'PostgreSQL': 1,
}

const backend = {
    'C#': 3,
    python: 1,
    '.NET': 2,
}

const cloud = {
    'Azure': 2,
    'Google Cloud': 1,
}

const tools = {
    git: 2,
    npm: 2,
    Docker: 1,
    GitHub: 1,
    GitLab: 1,
    BitBucket: 1,
}

export const CodePage = () => {
    return <SubPage>
        <Stack spacing={3}>
            <Grid container spacing={3}>
                <Grid size={12}>
                    <RoundedCard title="Who I've worked for">
                        <Grid container spacing={3} justifyContent='space-around'>
                            {companies.map(c => <Grid>
                                <Image src={c} maxHeight={60} />
                            </Grid>)}
                        </Grid>
                    </RoundedCard>
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <RoundedCard title="What I know">
                        <Grid container spacing={1} justifyContent='space-between'>

                            {Object.keys(webSkills).map(k => <Chip
                                label={k}
                                icon={<StarIcon />}
                            />)}
                        </Grid>
                    </RoundedCard>
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <RoundedCard title="What I've done">
                        What I've done
                    </RoundedCard>
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <RoundedCard title="What my coworkers have said">
                        <Typography>"Luis is a great asset as a developer. I recommend him without hesitation.

                            He is dependable, fast and delivers quality software. He is also willing and able to take on work in unfamiliar domains; ask for help as necessary and get it done.

                            That plus his very engaging personality made him an integral member of our software team."</Typography>
                    </RoundedCard>
                </Grid>
            </Grid>
        </Stack>
    </SubPage>
}