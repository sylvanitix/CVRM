import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Campaign as CampaignIcon,
  Groups as PartnershipsIcon,
  Assessment as PerformanceIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';

const features = [
  {
    icon: <CampaignIcon sx={{ fontSize: 40 }} />,
    title: 'GESTION DE PROJETS',
    description: 'Pilotage des campagnes de communication et coordination des équipes internes pour des projets impactants'
  },
  {
    icon: <PartnershipsIcon sx={{ fontSize: 40 }} />,
    title: 'PARTENARIATS',
    description: 'Développement et gestion des relations avec nos partenaires pour créer des collaborations durables'
  },
  {
    icon: <PerformanceIcon sx={{ fontSize: 40 }} />,
    title: 'PERFORMANCE',
    description: 'Analyse des KPIs et optimisation continue des dispositifs pour maximiser l\'impact des projets'
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: 'GROWTH MANAGEMENT',
    description: 'Élaboration et mise en œuvre de stratégies de croissance, avec une augmentation moyenne de 150% des KPIs clés'
  }
];

export default function Welcome() {
  return (
    <Box sx={{ position: 'relative' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/assets/gm-pattern.png")',
            opacity: 0.1,
            animation: 'pulse 4s ease-in-out infinite',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 8 }}>
          <Box
            component="img"
            src="/images/logo.png"
            alt="Gentle Mates Logo"
            sx={{
              width: '200px',
              mb: 4,
              filter: 'drop-shadow(0 0 20px rgba(212, 255, 0, 0.4))',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  filter: 'drop-shadow(0 0 20px rgba(212, 255, 0, 0.4))',
                },
                '50%': {
                  filter: 'drop-shadow(0 0 30px rgba(212, 255, 0, 0.6))',
                  transform: 'scale(1.05)',
                },
                '100%': {
                  filter: 'drop-shadow(0 0 20px rgba(212, 255, 0, 0.4))',
                },
              },
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#d4ff00',
              textShadow: '0 0 20px rgba(212, 255, 0, 0.4)',
            }}
          >
            Sylvain Boué
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              color: '#e5b3ff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textShadow: '0 0 10px rgba(229, 179, 255, 0.4)',
            }}
          >
            Account Manager
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mt: 4, mb: 8 }}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(227, 111, 222, 0.1)',
                border: '1px solid rgba(212, 255, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  backgroundColor: 'rgba(227, 111, 222, 0.2)',
                  border: '1px solid rgba(212, 255, 0, 0.3)',
                  '& .icon': {
                    color: '#d4ff00',
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <Box
                className="icon"
                sx={{
                  color: '#e5b3ff',
                  mb: 2,
                  transition: 'all 0.3s ease',
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mb: 1,
                  color: '#d4ff00',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#ffffff',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/pipeline"
          sx={{
            bgcolor: 'rgba(212, 255, 0, 0.1)',
            color: '#d4ff00',
            border: '1px solid #d4ff00',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            '&:hover': {
              bgcolor: 'rgba(212, 255, 0, 0.2)',
              transform: 'translateY(-2px)',
              boxShadow: '0 5px 15px rgba(212, 255, 0, 0.2)',
            },
          }}
        >
          Découvrir mon CV interactif
        </Button>
      </Box>
    </Box>
  );
}
