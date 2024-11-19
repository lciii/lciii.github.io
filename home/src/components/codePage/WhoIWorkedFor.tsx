import { Grid2 as Grid } from "@mui/material";
import { Image } from '../../shared/Image';
import { RoundedCard } from '../../shared/RoundedCard';

const companies = ['runsafeLogo.png', 'IntertechLogo.png', 'Emerson_Electric_Company.png', 'Thomson_Reuters_logo.png']

export const WhoIWorkedFor = () => {
    return <RoundedCard title="Who I've worked for">
        <Grid container spacing={3} justifyContent='space-around' alignItems='center'>
            {companies.map(c => <Grid>
                <Image src={c} maxHeight={60} />
            </Grid>)}
        </Grid>
    </RoundedCard>
}