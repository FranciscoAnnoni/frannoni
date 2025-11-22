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
      // CAMBIO CLAVE: Eliminar position: 'fixed' para que se contenga en el Box de App.tsx
      sx={{
        // position: 'fixed', <--- ELIMINADO
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center', // Centrado horizontal
        alignItems: 'center',    // Centrado vertical
        padding: '1rem',
        zIndex: 1000,
        // Agregando estilos de Tailwind para esquinas redondeadas en la parte inferior
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
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