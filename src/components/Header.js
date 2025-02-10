import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

export default function Header({ onMenuClick }) {
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(227, 111, 222, 0.1)',
        borderBottom: '1px solid rgba(212, 255, 0, 0.1)',
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          padding: '0 16px', 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: theme.palette.primary.main }} />
          </IconButton>

          <Box
            component="img"
            src="/images/logo.png"
            alt="Gentle Mates Logo"
            sx={{
              height: '45px',
              mr: 2,
              filter: 'drop-shadow(0 0 10px rgba(212, 255, 0, 0.3))',
              '&:hover': {
                filter: 'drop-shadow(0 0 15px rgba(212, 255, 0, 0.5))',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            variant="outlined"
            href="mailto:sylvanitixx@gmail.com"
            sx={{
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: 'rgba(212, 255, 0, 0.1)',
              },
            }}
          >
            Contact
          </Button>

          <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
            <IconButton
              href="https://www.linkedin.com/in/sylvain-boué-851968176/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: 'rgba(212, 255, 0, 0.1)',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
