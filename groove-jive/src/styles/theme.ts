import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7B68EE', // Medium slate blue
    },
    secondary: {
      main: '#1DB954', // Spotify green
    },
    background: {
      default: '#121212', // Dark background
      paper: '#181818', // Slightly lighter background for cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
  },
  typography: {
    fontFamily: '"Circular Std", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 500, // Rounded buttons
        },
      },
    },
  },
});

