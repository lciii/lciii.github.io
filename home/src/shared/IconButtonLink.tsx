
import { IconButton, IconButtonProps } from "@mui/material";
import React from 'react';

const iconSize = '1em'

export const IconButtonLink = (props: IconButtonProps & React.ComponentProps<'a'>) => {
    return <IconButton target="_blank" rel="noopener noreferrer" {...props} sx={t => ({
        padding: '4px',
        '& svg': {
            height: '2em',
            width: '2em',
            [t.breakpoints.up('md')]: {
                height: '1em',
                width: '1em',
            },
        }
    })} />
}