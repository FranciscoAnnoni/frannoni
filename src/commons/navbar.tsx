import React from 'react';
import { Box, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IosShareIcon from '@mui/icons-material/IosShare';

// --- Importaciones de Logos ---
// (Asumiendo que navbar.tsx está en 'src/commons/' y los assets en 'src/assets/')
import logoWhite from '../assets/logoWhite.svg'; // Corregido: Importado
import logoDarck from '../assets/logoDarck.svg'; // Corregido: Importado
// -----------------------------

interface NavbarProps {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
}

const iconButtonStyle = {
  color: 'var(--color-text)',
  transition: 'transform 0.2s ease-in-out, color 0.3s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    backgroundColor: 'transparent',
  },

  '&:focus': {
    outline: 'none',
  },
};

const Navbar: React.FC<NavbarProps> = ({ mode, onToggleMode }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'var(--color-navbar-bg)',
        zIndex: 1000,
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* --- LADO IZQUIERDO: LOGO --- */}
      <Box
        component="img"
        // --- CAMBIO ---
        // Usamos las variables importadas, no un string de ruta
        src={mode === 'dark' ? logoWhite : logoDarck}
        alt="Logo"
        sx={{
          height: '40px', // Ajusta la altura de tu logo
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* --- LADO DERECHO: ICONOS --- */}
      <Box>
        <IconButton
          onClick={onToggleMode}
          aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          sx={iconButtonStyle}
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton
          aria-label="Share"
          title="Share"
          sx={iconButtonStyle}
        >
          <IosShareIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;