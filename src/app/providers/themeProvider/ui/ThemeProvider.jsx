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
        components: {
            MuiButton: {
                defaultProps: {
                    sx: {
                        cursor: 'pointer',
                        color: '#000',
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textTransform: 'none',
                        boxShadow: 'unset',
                        position: 'relative',
                        backgroundColor: '#fff',
                        padding: '20px 40px',
                        borderRadius: '32px',
                        transition: 'background 0.2s, color 0.2s, border 0.2s, padding 0.2s, transform 0.2s',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#fff',
                        },
                    }
                },
            },
        },
    });

    return <MaterialTheme theme={theme}>{children}</MaterialTheme>;
};