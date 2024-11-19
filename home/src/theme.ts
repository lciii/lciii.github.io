import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    typography: {
        fontFamily: ['Rubik Variable', 'sans-serif'].join(','),
        fontWeightRegular: 300,
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
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'all .2s'
                    },
                }
            }
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;