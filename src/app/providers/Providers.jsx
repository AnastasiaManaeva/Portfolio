import React from 'react';
import { ThemeProvider } from './themeProvider';
import MainPage from '../../pages/MainPage/ui/MainPage';

export const Providers = () => {
    return (
        <React.StrictMode>
            <ThemeProvider>
                <MainPage />
            </ThemeProvider>
        </React.StrictMode>
    );
};