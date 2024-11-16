import { Stack, StackProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Row = ({ children, ...props }: PropsWithChildren<StackProps>) => {
    return <Stack direction="row" alignItems="center" {...props}>{children}</Stack>
}