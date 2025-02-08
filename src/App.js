import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Pipeline from './components/Pipeline';
import Contacts from './components/Contacts';
import Companies from './components/Companies';
import Marketing from './components/Marketing';
import Projects from './components/Projects';
import GrowthAssistant from './components/GrowthAssistant';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box 
        sx={{ 
          display: 'flex', 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #E36FDE 0%, #2a0044 100%)',
          position: 'relative',
        }}
      >
        <Header onMenuClick={handleDrawerToggle} />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'transparent',
            color: '#ffffff',
            pt: '64px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Container maxWidth="xl" sx={{ p: 3 }}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/pipeline" element={<Pipeline />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Container>
          <GrowthAssistant />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
