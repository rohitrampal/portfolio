'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';
import { portfolioConfig } from '@/config';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: portfolioConfig.theme.light.primary,
    },
    secondary: {
      main: portfolioConfig.theme.light.secondary,
    },
    background: {
      default: portfolioConfig.theme.light.background,
      paper: '#f5f5f5',
    },
    text: {
      primary: portfolioConfig.theme.light.text,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
  },
} as ThemeOptions);

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: portfolioConfig.theme.dark.primary,
    },
    secondary: {
      main: portfolioConfig.theme.dark.secondary,
    },
    background: {
      default: portfolioConfig.theme.dark.background,
      paper: '#1e1e1e',
    },
    text: {
      primary: portfolioConfig.theme.dark.text,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        },
      },
    },
  },
} as ThemeOptions);

