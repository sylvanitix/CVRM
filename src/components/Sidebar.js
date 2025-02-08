import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Timeline as TimelineIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  Campaign as MarketingIcon,
  Language as WebIcon,
  Science as InnovationIcon,
  Work as WorkIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    text: 'Tableau de bord',
    icon: <DashboardIcon />,
    path: '/'
  },
  {
    text: 'Pipeline',
    icon: <TimelineIcon />,
    path: '/pipeline'
  },
  {
    text: 'Contacts',
    icon: <PeopleIcon />,
    path: '/contacts'
  },
  {
    text: 'Entreprises',
    icon: <BusinessIcon />,
    path: '/companies'
  },
  {
    text: 'Marketing',
    icon: <MarketingIcon />,
    path: '/marketing'
  },
  {
    text: 'Projets',
    icon: <WorkIcon />,
    path: '/projects'
  },
];

const drawerWidth = 240;

export default function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'rgba(227, 111, 222, 0.1)',
          borderRight: '1px solid rgba(212, 255, 0, 0.1)',
          backdropFilter: 'blur(10px)',
        },
      }}
    >
      <Box
        sx={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(212, 255, 0, 0.1)',
          p: 2,
        }}
      >
        <Box
          component="img"
          src="/images/logo.png"
          alt="Gentle Mates Logo"
          sx={{
            height: '45px',
            filter: 'drop-shadow(0 0 10px rgba(212, 255, 0, 0.3))',
            '&:hover': {
              filter: 'drop-shadow(0 0 15px rgba(212, 255, 0, 0.5))',
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease-in-out',
            },
          }}
        />
      </Box>

      <List sx={{ pt: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
            sx={{
              mb: 1,
              mx: 1,
              borderRadius: '4px',
              '&.Mui-selected': {
                backgroundColor: 'rgba(212, 255, 0, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(212, 255, 0, 0.2)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  backgroundColor: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(212, 255, 0, 0.05)',
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === item.path
                  ? theme.palette.primary.main
                  : 'rgba(212, 255, 0, 0.7)',
                minWidth: '40px',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                '& .MuiListItemText-primary': {
                  color: location.pathname === item.path
                    ? theme.palette.primary.main
                    : 'rgba(212, 255, 0, 0.7)',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
