import { useState, useEffect } from 'react';
import '../index.css';
// Asumiendo que los archivos están en 'src/commons/' y App.tsx en 'src/'
import Navbar from '../commons/Navbar.tsx';
import Footer from '../commons/Footer.tsx';
import { Box } from '@mui/material';
import Content from '../commons/Content.tsx';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box sx={{
      maxWidth: '36rem',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 14,
      overflow: 'hidden',
      transition: 'all 0.2s',
    }}>

      <Navbar mode={mode} onToggleMode={toggleMode} />

      <Box sx={{
        textAlign: 'center',
        padding: '15px',
        flexGrow: 1,
        color: mode === 'dark' ? 'white' : 'black',
        transition: 'color 0.5s, background-color 0.5s',
      }}>
        <Content mode={mode} />

      </Box>

      <Footer mode={mode} />
    </Box>
  );
}

export default App;