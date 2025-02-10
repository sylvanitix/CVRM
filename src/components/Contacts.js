import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

export const contacts = [
  {
    id: 1,
    name: 'Sylvain Boué',
    role: 'Growth Lead & Product Manager • Yunico',
    status: 'En Poste',
    skills: ['Growth', 'Product', 'Communication digitale', 'Marketing', 'Management'],
    score: '100%',
    period: 'Juin 2024 - Présent',
    introduction: `Passionné par l'innovation et le développement B2B, j'ai développé une expertise unique qui combine growth marketing et product management. Mon parcours m'a permis de comprendre les enjeux complexes du marché B2B et de développer des solutions adaptées.`,
    formation: [
      'M2 Communication digitale - ECS Paris (2023)',
      'M1 Event, relations presse / publique - ECS Paris (2022)',
      'Bachelor Communication & Marketing - ECS Paris (2019)'
    ],
    growthManagement: [
      'Développement et mise en œuvre de stratégies de croissance B2B',
      'Gestion de produit et amélioration continue des fonctionnalités',
      'Analyse des besoins clients et définition de la roadmap produit',
      'Optimisation des processus de conversion et d\'acquisition'
    ],
    leadership: [
      'Direction d\'équipes pluridisciplinaires',
      'Mise en place de méthodologies agiles',
      'Innovation dans les approches marketing et produit',
      'Développement de solutions B2B innovantes'
    ],
    results: [
      'Croissance significative des métriques clés',
      'Amélioration de la satisfaction client',
      'Optimisation des processus internes',
      'Développement de nouvelles fonctionnalités à forte valeur ajoutée'
    ],
    avatar: '/assets/profile.jpg',
    location: 'Wissous - 91320',
    email: 'sylvain.boue@yunico.fr',
    linkedin: 'https://www.linkedin.com/in/sylvainboue/'
  }
];

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseDialog = () => {
    setSelectedContact(null);
  };

  const renderSection = (title, items, icon) => {
    if (!items || items.length === 0) return null;
    
    return (
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ 
          color: '#d4ff00',
          fontSize: '1rem',
          fontWeight: 600,
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
          <span>{icon}</span>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {items.map((item, index) => (
            <Typography 
              key={index}
              sx={{ 
                color: 'white',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'flex-start',
                '&:before': {
                  content: '"•"',
                  color: '#d4ff00',
                  marginRight: '8px'
                }
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    );
  };

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
        Contacts
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.23)',
                borderRadius: '4px',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.4)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#d4ff00',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            color: '#d4ff00',
            borderColor: '#d4ff00',
            borderRadius: '4px',
            textTransform: 'none',
            '&:hover': {
              borderColor: '#d4ff00',
              backgroundColor: 'rgba(212, 255, 0, 0.1)',
            },
          }}
        >
          Filtres
        </Button>
      </Box>

      <Box sx={{ 
        bgcolor: '#420E58',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr 0.8fr 2fr 0.5fr 1fr',
          p: 2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <Typography sx={{ color: '#d4ff00', fontSize: '0.875rem' }}>Nom</Typography>
          <Typography sx={{ color: '#d4ff00', fontSize: '0.875rem' }}>Rôle</Typography>
          <Typography sx={{ color: '#d4ff00', fontSize: '0.875rem' }}>Statut</Typography>
          <Typography sx={{ color: '#d4ff00', fontSize: '0.875rem' }}>Compétences</Typography>
          <Typography sx={{ color: '#d4ff00', fontSize: '0.875rem' }}>Score</Typography>
          <Typography sx={{ color: '#d4ff00', fontSize: '0.875rem' }}>Période</Typography>
        </Box>

        {contacts.map((contact) => (
          <Box 
            key={contact.id}
            onClick={() => handleContactClick(contact)}
            sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr 0.8fr 2fr 0.5fr 1fr',
              p: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
              cursor: 'pointer',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar 
                src={contact.avatar} 
                sx={{ 
                  width: 32, 
                  height: 32,
                  border: '2px solid rgba(212, 255, 0, 0.3)'
                }}
              />
              <Typography sx={{ color: 'white', fontSize: '0.875rem' }}>
                {contact.name}
              </Typography>
            </Box>
            <Typography sx={{ color: 'white', fontSize: '0.875rem' }}>
              {contact.role}
            </Typography>
            <Box>
              <Chip
                label={contact.status}
                size="small"
                sx={{
                  bgcolor: contact.status === 'En Poste' ? 'rgba(212, 255, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                  color: contact.status === 'En Poste' ? '#d4ff00' : 'white',
                  border: `1px solid ${contact.status === 'En Poste' ? 'rgba(212, 255, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'}`,
                  fontSize: '0.75rem',
                  height: '24px',
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {contact.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(212, 255, 0, 0.1)',
                    color: '#d4ff00',
                    border: '1px solid rgba(212, 255, 0, 0.3)',
                    fontSize: '0.75rem',
                    height: '24px',
                  }}
                />
              ))}
            </Box>
            <Typography sx={{ color: 'white', fontSize: '0.875rem' }}>
              {contact.score}
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '0.875rem' }}>
              {contact.period}
            </Typography>
          </Box>
        ))}
      </Box>

      <Dialog
        open={Boolean(selectedContact)}
        onClose={handleCloseDialog}
        maxWidth="lg"
        PaperProps={{
          sx: {
            bgcolor: '#420E58',
            color: 'white',
            width: '90%',
            maxWidth: '1000px',
            borderRadius: '4px',
            '& .MuiDialogContent-root': {
              bgcolor: '#420E58',
              padding: '32px'
            }
          },
        }}
      >
        {selectedContact && (
          <>
            <DialogTitle sx={{ 
              color: '#d4ff00',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px 32px',
              bgcolor: '#420E58',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar 
                  src={selectedContact.avatar}
                  sx={{ 
                    width: 64,
                    height: 64,
                    border: '2px solid rgba(212, 255, 0, 0.3)'
                  }}
                />
                <Box>
                  <Typography sx={{ color: '#d4ff00', fontSize: '1.25rem' }}>
                    {selectedContact.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    {selectedContact.role}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{ color: 'white' }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ 
                bgcolor: '#420E58',
                padding: '32px',
                margin: '-32px',
                width: 'calc(100% + 64px)'
              }}>
                <Typography sx={{ 
                  color: 'white',
                  fontSize: '0.875rem',
                  mb: 3,
                  lineHeight: 1.6
                }}>
                  {selectedContact.introduction}
                </Typography>

                {renderSection('Formation', selectedContact.formation, '📚')}
                {renderSection('Growth & Product Management', selectedContact.growthManagement, '🎯')}
                {renderSection('Leadership & Innovation', selectedContact.leadership, '💡')}
                {renderSection('Résultats & Impact', selectedContact.results, '🚀')}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
