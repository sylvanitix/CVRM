import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { PictureAsPdf as PdfIcon, Code as CodeIcon } from '@mui/icons-material';

const projects = {
  esport: [
    {
      id: 1,
      title: "Dossier de Sponsoring - SkillCamp 2024",
      type: "pdf",
      description: "Présentation détaillée du projet SkillCamp 2024, incluant les opportunités de partenariat et les différentes offres de sponsoring.",
      pdfUrl: "/assets/pdf/DOSSIER_DE_SPONSORING_-_2024_SKILLCAMP_1.pdf",
      tags: ["Sponsoring", "Esport", "Event"],
      collaboration: "Document réalisé en collaboration avec l'équipe SkillCamp"
    },
    {
      id: 2,
      title: "Dossier de Sponsoring - NumberOne 2022",
      type: "pdf",
      description: "Présentation du projet NumberOne 2022, un événement majeur dans l'écosystème esport.",
      pdfUrl: "/assets/pdf/NumberOne2022.pdf",
      tags: ["Esport", "Event", "Competition"],
      collaboration: "Document réalisé en collaboration avec l'équipe NumberOne"
    },
    {
      id: 3,
      title: "Dossier de Sponsoring - Louvardgame",
      type: "pdf",
      description: "Dossier de sponsoring spécifique pour l'événement Louvardgame, détaillant les opportunités de partenariat.",
      pdfUrl: "/assets/pdf/Louvardgame sponsoring.pdf",
      tags: ["Event", "Gaming", "Sponsoring"],
      collaboration: "Document réalisé en collaboration avec l'équipe Louvardgame"
    },
    {
      id: 4,
      title: "Dossier de Sponsoring - Grizi Esport",
      type: "pdf",
      description: "Présentation générale des opportunités de partenariat et de sponsoring pour Grizi Esport, avec une approche moderne et innovante.",
      pdfUrl: "/assets/pdf/DOSSER_SPONSORSHIP_GENERAL_2.0_3.pdf",
      tags: ["Sponsoring", "Business", "Partnership"],
      collaboration: "Document réalisé en collaboration avec l'équipe Grizi Esport"
    },
    {
      id: 5,
      title: "Manager team LoL - Myth's Legion",
      type: "project",
      description: "Gestion complète d'une équipe League of Legends semi-professionnelle. Responsabilités : recrutement des joueurs, planification des entraînements, analyse des performances, gestion des tournois et de la communication d'équipe. Développement d'une structure compétitive visant les ligues majeures.",
      tags: ["Esport", "Management", "League of Legends", "Team Building"]
    },
    {
      id: 6,
      title: "Intervenant Event - Epsilon Esport",
      type: "project",
      description: "Animation et présentation lors d'événements majeurs pour Epsilon Esport. Rôles : présentation des équipes, animation des temps forts, interviews des joueurs et coachs, analyse des matchs en direct. Contribution à la production de contenu événementiel et à l'engagement communautaire. Organisation et supervision des tournois amateurs et semi-professionnels.",
      tags: ["Esport", "Event Management", "Animation", "Production", "Community"]
    }
  ],
  growth: [
    {
      id: 7,
      title: "Extension Web - Automatisation",
      type: "project",
      description: "Développement d'extensions navigateur pour automatiser les tâches répétitives. Utilisation des API web, manipulation du DOM, et intégration avec différents services web. Focus sur l'amélioration de la productivité et l'optimisation des workflows.",
      tags: ["Web Development", "JavaScript", "API", "Automation"]
    },
    {
      id: 8,
      title: "Web Scraper - Data Collection",
      type: "project",
      description: "Outil de scraping web avancé intégré à l'application. Fonctionnalités : extraction automatique des réseaux sociaux (LinkedIn, Facebook, Twitter, Instagram), emails et numéros de téléphone. Support du traitement par lots via import CSV, interface utilisateur intuitive avec barre de progression, et export des résultats au format CSV. Utilisation de proxy pour contourner les limitations CORS.",
      tags: ["Python", "Web Scraping", "Data Analysis", "Automation", "CSV Processing"],
      projectUrl: "/webscraper"
    },
    {
      id: 9,
      title: "Expert IA & Prompt Engineering",
      type: "project",
      description: "Expertise approfondie dans l'utilisation et l'optimisation des modèles d'IA (GPT-4, Claude, etc.). Maîtrise du prompt engineering pour des cas d'usage variés : génération de contenu, analyse de données, automatisation de tâches complexes. Développement de systèmes de prompts avancés pour maximiser les performances des IA. Expérience dans l'intégration d'IA via API (OpenAI, Anthropic) et dans la création de workflows d'IA personnalisés.",
      tags: ["Intelligence Artificielle", "Prompt Engineering", "GPT-4", "LLMs", "Automation", "API Integration"]
    }
  ]
};

function Projects() {
  const handlePreviewPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownloadPdf = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderProjectCard = (project) => (
    <Grid item xs={12} md={4} key={project.id}>
      <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'rgba(227, 111, 222, 0.08)',
        border: '1px solid rgba(212, 255, 0, 0.1)',
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }
      }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            {project.type === 'pdf' ? (
              <PdfIcon sx={{ color: 'rgba(212, 255, 0, 0.8)' }} />
            ) : (
              <CodeIcon sx={{ color: 'rgba(212, 255, 0, 0.8)' }} />
            )}
            <Typography variant="h6" sx={{ color: 'rgba(212, 255, 0, 0.8)' }}>
              {project.title}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 2, color: '#ffffff' }}>
            {project.description}
          </Typography>
          {project.collaboration && (
            <Typography variant="body2" sx={{ mb: 2, color: '#e5b3ff', fontStyle: 'italic' }}>
              {project.collaboration}
            </Typography>
          )}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag, tagIndex) => (
              <Chip
                key={tagIndex}
                label={tag}
                size="small"
                sx={{
                  bgcolor: 'rgba(212, 255, 0, 0.05)',
                  color: 'rgba(212, 255, 0, 0.8)',
                  border: '1px solid rgba(212, 255, 0, 0.15)',
                }}
              />
            ))}
          </Box>
        </CardContent>
        {project.type === 'pdf' && (
          <CardActions sx={{ p: 2, pt: 0 }}>
            <Button
              size="small"
              onClick={() => handlePreviewPdf(project.pdfUrl)}
              sx={{
                color: 'rgba(212, 255, 0, 0.8)',
                borderColor: 'rgba(212, 255, 0, 0.3)',
                '&:hover': {
                  bgcolor: 'rgba(212, 255, 0, 0.05)',
                }
              }}
            >
              Aperçu PDF
            </Button>
            <Button
              size="small"
              onClick={() => handleDownloadPdf(project.pdfUrl)}
              sx={{
                color: 'rgba(212, 255, 0, 0.8)',
                borderColor: 'rgba(212, 255, 0, 0.3)',
                '&:hover': {
                  bgcolor: 'rgba(212, 255, 0, 0.05)',
                }
              }}
            >
              Télécharger
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );

  const renderProjectSection = (title, projectsList) => (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ 
        mb: 3, 
        color: 'rgba(212, 255, 0, 0.9)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: { xs: '1.2rem', sm: '1.5rem' },
        textShadow: '0 0 5px rgba(212, 255, 0, 0.2)',
      }}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {projectsList.map(renderProjectCard)}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ 
        mb: 4,
        color: 'rgba(212, 255, 0, 0.9)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: { xs: '1.5rem', sm: '2rem' },
        textShadow: '0 0 5px rgba(212, 255, 0, 0.2)',
      }}>
        Mes Projets
      </Typography>

      {renderProjectSection("Travaux Esport", projects.esport)}
      {renderProjectSection("Growth", projects.growth)}
    </Box>
  );
}

export default Projects;
