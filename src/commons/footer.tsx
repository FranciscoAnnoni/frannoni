import React from 'react';
import { Box } from '@mui/material';

// --- Importaciones de Logos ---
import longLogoWhite from '../assets/longLogoWhite.svg'; // Corregido: Importado
import longLogoDarck from '../assets/longLogoDarck.svg'; // Corregido: Importado
// -----------------------------

interface FooterProps {
  mode: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ mode }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center', // Centrado horizontal
        alignItems: 'center',    // Centrado vertical
        padding: '1rem',
        //backgroundColor: 'var(--color-background)', // Fondo de la página
        zIndex: 1000,
      }}
    >
      <Box
        component="img"
        // --- CAMBIO ---
        // Usamos las variables importadas
        src={mode === 'dark' ? longLogoWhite : longLogoDarck}
        alt="Company Logo"
        sx={{
          height: '30px', // Ajusta la altura de tu logo largo
          transition: 'opacity 0.3s ease',
        }}
      />
    </Box>
  );
};

export default Footer;