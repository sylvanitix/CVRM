import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d4ff00', // Vert fluo Gentle Mates
      light: '#e0ff4d',
      dark: '#94b300',
      contrastText: '#000000',
    },
    secondary: {
      main: '#e5b3ff', // Violet Gentle Mates
      light: '#ecc6ff',
      dark: '#a07db2',
      contrastText: '#000000',
    },
    background: {
      default: '#2a0044', // Violet foncé
      paper: 'rgba(42, 0, 68, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e5b3ff',
    },
  },
  typography: {
    fontFamily: "'Rajdhani', sans-serif",
    h1: {
      color: '#d4ff00',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontWeight: 700,
    },
    h2: {
      color: '#d4ff00',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontWeight: 700,
    },
    h3: {
      color: '#d4ff00',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 600,
    },
    h4: {
      color: '#d4ff00',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 600,
    },
    h5: {
      color: '#d4ff00',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 500,
    },
    h6: {
      color: '#d4ff00',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontWeight: 500,
    },
    button: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontWeight: 600,
          padding: '12px 24px',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(212, 255, 0, 0.3)',
          },
        },
        contained: {
          backgroundColor: 'rgba(42, 0, 68, 0.8)',
          border: '2px solid #d4ff00',
          color: '#d4ff00',
          '&:hover': {
            backgroundColor: 'rgba(212, 255, 0, 0.1)',
          },
        },
        outlined: {
          border: '2px solid #d4ff00',
          color: '#d4ff00',
          '&:hover': {
            border: '2px solid #d4ff00',
            backgroundColor: 'rgba(212, 255, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(42, 0, 68, 0.8)',
          borderRadius: 0,
          border: '1px solid rgba(229, 179, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 5px 15px rgba(229, 179, 255, 0.3)',
            border: '1px solid #d4ff00',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#d4ff00',
          '&:hover': {
            backgroundColor: 'rgba(212, 255, 0, 0.1)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgba(212, 255, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(212, 255, 0, 0.2)',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(229, 179, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#d4ff00',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d4ff00',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(42, 0, 68, 0.95)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
