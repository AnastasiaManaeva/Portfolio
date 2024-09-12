import React from 'react';
import { createTheme, ThemeProvider as MaterialTheme } from '@mui/material';

export const ThemeProvider = ({ children }) => {
    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, Arial',
            header: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            footer: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            title: {
                fontSize: 64,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            contentBigLH: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            contentSmallLH: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            fontBtn: {
                fontWeight: 500,
                fontSize: 14,
                lineHeight: 1.4,
            },
        },
    });

    return <MaterialTheme theme={theme}>{children}</MaterialTheme>;
};