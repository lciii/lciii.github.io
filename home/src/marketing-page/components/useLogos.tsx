import { useTheme } from "@mui/system";

export type LogoCompanies = 'runsafe' | 'intertech' | 'deepcell' | 'homepoint' | 'rsm' | 'emerson' | 'thomsonReuters'

const logos: { [x in 'light' | 'dark']: Record<LogoCompanies, string> } = {
    light: {
        runsafe: 'RunSafe_Logo_light.svg',
        intertech: 'IntertechLogo.png',
        deepcell: 'deepcellLogo.svg',
        homepoint: 'homepointLogo.svg',
        rsm: 'rsmLogo.png',
        emerson: 'Emerson_Electric_Company.png',
        thomsonReuters: 'Thomson_Reuters_logo.png',
    },
    dark: {
        runsafe: 'runsafeLogoDark.webp',
        intertech: 'Intertech-logo-dark.png',
        deepcell: 'deepcellDark.svg',
        homepoint: 'homepointLogo.svg',
        rsm: 'rsmLogo.png',
        emerson: 'emersonDark.png',
        thomsonReuters: 'thomsonLogoDark.svg',
    }
}

export const useLogos = () => {
    const theme = useTheme();
    return theme.palette.mode === 'light' ? logos.light : logos.dark;
};
