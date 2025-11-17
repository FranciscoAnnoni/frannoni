import { useState, useEffect } from 'react';
import './index.css'; 
// Asumiendo que los archivos están en 'src/commons/' y App.tsx en 'src/'
import Navbar from './commons/navbar.tsx'; // Se añade extensión .tsx
import Footer from './commons/footer.tsx'; // Se añade extensión .tsx
import { Box } from '@mui/material'; 

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar mode={mode} onToggleMode={toggleMode} />
        
      {/* Contenido principal de la página */}
      <Box sx={{ textAlign: 'center' }}>
        <h1>Vite + React</h1>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Box>
      
      {/* Uso del Footer añadido */}
      <Footer mode={mode} />
    </>
  );
}

export default App;