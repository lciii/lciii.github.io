
import { IconButton, IconButtonProps } from "@mui/material";
import React from 'react';

const iconSize = '1em'

export const IconButtonLink = (props: IconButtonProps & React.ComponentProps<'a'>) => {
    return <IconButton target="_blank" rel="noopener noreferrer" {...props} sx={{
        padding: '4px',
        '& svg': {
            height: iconSize, width: iconSize
        }
    }} />
}