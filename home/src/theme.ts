import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    typography: {
        fontFamily: ['Rubik Variable', 'sans-serif'].join(','),
        h1: {
            fontSize: '36px'
        },
        h2: {
            fontSize: '24px'
        },
        h3: {
            fontSize: '18px'
        },
        h4: {
            fontSize: '16px'
        },
        body1: {
            fontSize: '16px'
        },
        body2: {
            fontSize: '14px'
        },
    },
    palette: {
        background: {
            default: '#F0F0F0',
            paper: '#FFFFFF'
        }
    },
});
theme = responsiveFontSizes(theme);

export default theme;