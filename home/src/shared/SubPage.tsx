import { Collapse, Paper } from "@mui/material";
import { PropsWithChildren } from "react";



export const SubPage = ({ children }: PropsWithChildren) =>
    <Paper
        sx={{
            position: 'relative',
            zIndex: 0,
            padding: '72px 40px 40px 40px',
            marginX: 2,
            top: '-40px',
            borderRadius: '28px',
        }}
        elevation={0}>
        {children}
    </Paper>