import React from 'react';
import { createTheme, ThemeProvider as MaterialTheme } from '@mui/material';

export const ThemeProvider = ({ children }) => {
    const theme = createTheme({
        breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1320, 
              xl: 1536,
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial',
            h1: {
                fontSize: 64,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            h2: {
                fontSize: 56,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            h3: {
                fontSize: 48,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            h4: {
                fontSize: 44,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            h3BigLH: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            h3SmallLH: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.2,
            },
            headerLogo: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            header: {
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            footerLogo: {
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            footer: {
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            contentSmall: {
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            button: {
                fontSize: 14,
                fontWeight: 500,
                lineHeight: 1.4,
                textTransform: 'none',
            },
            caption: {
                fontSize: 12,
                fontWeight: 500,
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
                            backgroundColor: '#cfcfcf',
                        },
                    }
                },
            },
        },
    });

    return <MaterialTheme theme={theme}>{children}</MaterialTheme>;
};