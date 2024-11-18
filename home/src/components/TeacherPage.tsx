import { Typography, IconButton, Link, Stack, Grid2 as Grid } from "@mui/material"
import { Row } from "../shared/Row"
import { SubPage } from "../shared/SubPage"

interface VideoProps {
    src: string
}

const Video = ({ src }: VideoProps) => {
    return <iframe
        width="100%"
        height="315"
        src={src}
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
    >
    </iframe>
}

// const videoIds = ['WkvAmCh2rRo','OPiPlbfzJ4A','I0hh86GZhhk','','','','','']

export const TeacherPage = () => {
    return <SubPage>
        <Stack spacing={3}>
            <Typography variant="h2">Videos of me teaching at <Link href="https://www.hometownchurch.com/" target="_blank" rel="noopener noreferrer">Hometown Church</Link></Typography>
            <Grid container spacing={3}>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/WkvAmCh2rRo?si=IwazV-b1tIL2kKR-&amp;start=1397" />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/OPiPlbfzJ4A?si=JtqKWDxsjzwnPM0K" />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/I0hh86GZhhk?si=_-HXxMQbIGlQ-J4T" />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/CUT5brgT9PA?si=b5EQDDNZMjtXohUA" />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/7-eEIjJ09YQ?si=kKjUw7shrMWBgDIT" />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/9eDj5L2pKsE?si=NEE2XRWu9DV_a58R" />
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Video src="https://www.youtube.com/embed/8LXyAGpGq0k?si=3lcVYs1IBufHNDAz" />
                </Grid>
            </Grid>
        </Stack>
    </SubPage>
}