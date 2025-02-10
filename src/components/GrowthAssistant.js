import React, { useState, useEffect } from 'react';
import {
  Box,
  Fab,
  Popover,
  Typography,
  IconButton,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import {
  TipsAndUpdates as TipsIcon,
  Close as CloseIcon,
  ArrowForward as ArrowIcon,
  Insights as InsightsIcon,
  EmojiObjects as IdeaIcon,
  Timeline as StatsIcon,
} from '@mui/icons-material';

function GrowthAssistant() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTip, setCurrentTip] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const growthTips = [
    {
      title: "🎮 Gaming",
      content: "Passionné de jeux vidéo depuis toujours, avec une préférence pour les jeux compétitifs et les RPG. Fan de League of Legends et d'Esport.",
      tag: "Gaming"
    },
    {
      title: "💪 Sport",
      content: "Pratique régulière du sport en salle et de la musculation. Le sport est un excellent moyen de garder l'équilibre entre vie professionnelle et personnelle.",
      tag: "Sport"
    },
    {
      title: "💻 Tech",
      content: "Passionné par les nouvelles technologies, l'IA et le développement. Toujours à l'affût des dernières innovations dans le domaine du digital.",
      tag: "Tech"
    },
    {
      title: "✈️ Voyage",
      content: "Amateur de voyages et de découvertes culturelles. Chaque destination est une opportunité d'apprendre et de s'ouvrir à de nouvelles perspectives.",
      tag: "Travel"
    }
  ];

  const profileStats = {
    hobbies: 4,
    mainPassion: "Gaming & Tech",
    activeYears: 15,
    engagementLevel: 92,
    topInterests: ["Jeux vidéo", "Sport", "Tech", "Voyage"],
    favGames: ["League of Legends", "RPGs"]
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowStats(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % growthTips.length);
  };

  const toggleView = () => {
    setShowStats(!showStats);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'growth-assistant-popover' : undefined;

  useEffect(() => {
    const timer = setInterval(() => {
      if (open) {
        nextTip();
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [open]);

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20 }}>
      <Fab
        color="primary"
        aria-label="growth assistant"
        onClick={handleClick}
        sx={{
          width: 65,
          height: 65,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {showStats ? <StatsIcon /> : <TipsIcon />}
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPopover-paper': {
            width: 320,
            borderRadius: 2,
            mt: -2,
            mr: 2,
          },
        }}
      >
        <Card sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          <CardContent sx={{ pt: 4 }}>
            {!showStats ? (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <IdeaIcon color="primary" />
                  <Typography variant="h6">
                    {growthTips[currentTip].title}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {growthTips[currentTip].content}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip
                    label={growthTips[currentTip].tag}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    endIcon={<ArrowIcon />}
                    onClick={nextTip}
                    size="small"
                  >
                    Prochain conseil
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <InsightsIcon color="primary" />
                  <Typography variant="h6">
                    Statistiques des passions
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Loisirs
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {profileStats.hobbies}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Passion principale
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {profileStats.mainPassion}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Années d'activité
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {profileStats.activeYears}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Niveau d'engagement
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {profileStats.engagementLevel}%
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Intérêts principaux
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {profileStats.topInterests.map((interest) => (
                      <Chip
                        key={interest}
                        label={interest}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Jeux favoris
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {profileStats.favGames.map((game) => (
                      <Chip
                        key={game}
                        label={game}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
              </>
            )}
          </CardContent>
          <Button
            fullWidth
            onClick={toggleView}
            sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 0 }}
          >
            {showStats ? 'Voir les conseils' : 'Voir les stats'}
          </Button>
        </Card>
      </Popover>
    </Box>
  );
}

export default GrowthAssistant;
