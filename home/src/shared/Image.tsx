import { BoxProps, Box } from "@mui/material"

export const Image = (props: BoxProps & React.ComponentProps<'img'>) => {
    return <Box component="img" alt="" {...props} />
}