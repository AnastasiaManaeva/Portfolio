import React from 'react';
import { ThemeProvider } from './themeProvider';

export const Providers = ({children}) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};