import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: ['Rubik Variable', 'sans-serif'].join(',')
    },
    components: {
        // Name of the component ⚛️
        MuiButtonBase: {
            defaultProps: {
                // The props to apply
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
});