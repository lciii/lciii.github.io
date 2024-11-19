import StarIcon from '@mui/icons-material/Star';
import { Chip, ChipProps, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { RoundedCard } from '../../shared/RoundedCard';

const webSkills = {
    'Typescript/Javascript': 3,
    'HTML/CSS': 3,
    React: 3,
    Redux: 3,
    NextJs: 2,
    Angular: 1,

    MUI: 3,
    'Chakra UI': 1,

    'plotly-js': 3,
    'nivo': 1,

    Cypress: 3,
    Jest: 3,
    Vitest: 2,
    'React Testing Library': 2,
    'Enzyme': 1,

    Formik: 2,
    axios: 2,
    'react-table': 2,
    'react-query': 2,
    'SQL': 3,
    'PostgreSQL': 1,
}

const backend = {
    'C#': 3,
    python: 1,
    '.NET': 2,
    php: 1,
    vbscript: 1,
}

const tools = {
    git: 2,
    npm: 2,
    Docker: 1,
    GitHub: 1,
    GitLab: 1,
    BitBucket: 1,
    'Azure': 3,
    'Google Cloud': 1,
}

interface SkillChipProps extends ChipProps {
    skillLevel: number
}

const skillColorMap: Record<number, string> = {
    3: "#FFD700",
    2: "#C0C0C0",
    1: "#CD7F32",
}

const SkillChip = ({ skillLevel, ...props }: SkillChipProps) => {
    const color = skillColorMap[skillLevel]
    return <Chip
        {...props}
        icon={<StarIcon />}
        sx={{
            border: `1px solid ${color}`,
            backgroundColor: `${color}1A`,
            '& .MuiSvgIcon-root': {
                color,
            }
        }} />
}

export const WhatIKnow = () => {
    return <RoundedCard title="What I know">
        <Stack spacing={2}>
            <Typography variant="h3">Frontend</Typography>
            <Grid container spacing={1} justifyContent='space-between'>
                {Object.keys(webSkills).map(k => {
                    const key = k as keyof typeof webSkills
                    return <SkillChip
                        skillLevel={webSkills[key]}
                        label={k}
                    />
                })}
            </Grid>
            <Typography variant="h3">Backend</Typography>
            <Grid container spacing={1} justifyContent='space-between'>
                {Object.keys(backend).map(k => {
                    const key = k as keyof typeof backend
                    return <SkillChip
                        skillLevel={backend[key]}
                        label={k}
                    />
                })}
            </Grid>
            <Typography variant="h3">Tools</Typography>
            <Grid container spacing={1} justifyContent='space-between'>
                {Object.keys(tools).map(k => {
                    const key = k as keyof typeof tools
                    return <SkillChip
                        skillLevel={tools[key]}
                        label={k}
                    />
                })}
            </Grid>
        </Stack>
    </RoundedCard>
}