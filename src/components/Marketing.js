import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
  MonetizationOn as MonetizationOnIcon,
  Timeline as TimelineIcon,
  WorkspacePremium as QualityIcon,
} from '@mui/icons-material';

const campaigns = [
  {
    id: 1,
    name: 'Campagne B2B SaaS Q4 2023',
    type: 'Multi-canal',
    status: 'Archivée',
    metrics: {
      'Leads Générés': '180',
      'Taux Conversion': '8.5%',
      'ROI': '420%',
    },
    kpis: {
      'Pipeline Généré': '450K€',
      'Deals Signés': '180K€',
    },
    performance: 92,
  },
  {
    id: 2,
    name: 'ABM Tech Leaders Q3 2023',
    type: 'LinkedIn + Email',
    status: 'Archivée',
    metrics: {
      'Leads Générés': '85',
      'Taux Conversion': '12.8%',
      'ROI': '380%',
    },
    kpis: {
      'Pipeline Généré': '320K€',
      'Deals Signés': '145K€',
    },
    performance: 88,
  },
  {
    id: 3,
    name: 'Scale-up Program Q2 2023',
    type: 'Multi-canal',
    status: 'Archivée',
    metrics: {
      'Leads Générés': '150',
      'Taux Conversion': '9.2%',
      'ROI': '340%',
    },
    kpis: {
      'Pipeline Généré': '380K€',
      'Deals Signés': '160K€',
    },
    performance: 85,
  },
];

function Marketing() {
  const stats = [
    {
      title: 'Pipeline Total Généré',
      value: '1.15M€',
      trend: '35%',
      icon: <MonetizationOnIcon />,
      description: 'Sur 12 mois'
    },
    {
      title: 'Leads Qualifiés',
      value: '415',
      trend: '42%',
      icon: <GroupIcon />,
      description: 'B2B Tech & SaaS'
    },
    {
      title: 'ROI Moyen',
      value: '380%',
      trend: '28%',
      icon: <TrendingUpIcon />,
      description: 'Toutes campagnes'
    },
    {
      title: 'Taux de Conversion',
      value: '10.2%',
      trend: '3.5%',
      icon: <TimelineIcon />,
      description: 'Lead → Client'
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h1"
        sx={{ 
          color: '#d4ff00',
          fontSize: '2.5rem',
          fontWeight: 600,
          mb: 4,
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
      >
        Marketing
      </Typography>

      {/* Statistiques */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{
              bgcolor: '#420E58',
              border: '1px solid rgba(212, 255, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                border: '1px solid rgba(212, 255, 0, 0.3)',
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {React.cloneElement(stat.icon, { sx: { color: '#d4ff00', mr: 1 } })}
                  <Typography variant="h6" sx={{ color: '#d4ff00' }}>
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ color: '#ffffff', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#d4ff00' }}>
                    {stat.trend}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {stat.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Campagnes */}
      <Typography variant="h5" sx={{ mb: 3, color: '#d4ff00' }}>
        Campagnes Archivées
      </Typography>
      <Grid container spacing={3}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} md={4} key={campaign.id}>
            <Card sx={{
              bgcolor: '#420E58',
              border: '1px solid rgba(212, 255, 0, 0.1)',
              height: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                border: '1px solid rgba(212, 255, 0, 0.3)',
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#d4ff00', mb: 0.5 }}>
                      {campaign.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {campaign.type}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Chip 
                      label={campaign.status}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(212, 255, 0, 0.1)',
                        color: '#d4ff00',
                        border: '1px solid rgba(212, 255, 0, 0.3)',
                        mb: 1
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <QualityIcon sx={{ color: '#d4ff00', fontSize: '1rem' }} />
                      <Typography variant="body2" sx={{ color: '#d4ff00' }}>
                        {campaign.performance}%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  {Object.entries(campaign.metrics).map(([key, value]) => (
                    <Grid item xs={4} key={key}>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {key}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#ffffff' }}>
                        {value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
                    Performance Financière
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(campaign.kpis).map(([key, value]) => (
                      <Grid item xs={6} key={key}>
                        <Typography variant="body2" sx={{ color: '#d4ff00', mb: 0.5 }}>
                          {key}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ffffff' }}>
                          {value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={campaign.performance}
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#d4ff00'
                      },
                      height: 4,
                      borderRadius: 2
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Marketing;
