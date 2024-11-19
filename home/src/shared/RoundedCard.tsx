
import { Card, CardContent, Typography } from "@mui/material";
import { PropsWithChildren, ReactNode } from 'react';

interface RoundedCardProps {
    title?: string | ReactNode
}

export const RoundedCard = ({ children, title }: PropsWithChildren<RoundedCardProps>) => {
    return <>
        {title && typeof title === 'string' ? <Typography
            variant="h2"
            fontWeight={300}
            sx={{ paddingLeft: '28px', paddingBottom: '8px' }}
        >{title}</Typography> : title}
        <Card elevation={0} variant='outlined' sx={{ borderRadius: '28px' }}>
            <CardContent sx={{ padding: '40px' }}>
                {children}
            </CardContent>
        </Card>
    </>
}