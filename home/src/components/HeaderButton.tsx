import { Fade, IconButton, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface HeaderButtonProps {
    title: string
    link: string
    timeout: number
}

export const HeaderButton = ({ children, title, link, timeout }: PropsWithChildren<HeaderButtonProps>) => {
    return <Fade in timeout={timeout}>
        <Link to={link}>
            <IconButton
                sx={{
                    border: '1px solid black',
                    height: '180px',
                    width: '180px',
                    padding: 4,
                    flexDirection: 'column',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'all .4s'
                    },
                    '& svg': {
                        width: "3em", height: "3em"
                    }
                }}>
                {children}
                <Typography>{title}</Typography>
            </IconButton>
        </Link>
    </Fade>
}