
import { Card, CardContent, Typography } from "@mui/material";
import { PropsWithChildren } from 'react';

interface RoundedCardProps {
    title?: string
}

export const RoundedCard = ({ children, title }: PropsWithChildren<RoundedCardProps>) => {
    return <>
        {title ? <Typography
            variant="h2"
            fontWeight={300}
            sx={{ paddingLeft: '28px', paddingBottom: '8px' }}
        >{title}</Typography> : null}
        <Card elevation={0} variant='outlined' sx={{ borderRadius: '28px' }}>
            <CardContent sx={{ padding: '40px' }}>
                {children}
            </CardContent>
        </Card>
    </>
}