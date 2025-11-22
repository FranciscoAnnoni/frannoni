import React from 'react';
import { Box, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IosShareIcon from '@mui/icons-material/IosShare';

// --- Importaciones de Logos ---
import logoWhite from '../assets/logoWhite.svg';
import logoDarck from '../assets/logoDarck.svg';
// -----------------------------

interface NavbarProps {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
}

// Estilos base de los iconos (sin definir color fijo)
const iconBaseStyle = {
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
  const iconColor = mode === 'dark' ? 'white' : 'black';

  const handleShare = async () => {
    // Try native Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check out this page!',
          url: window.location.href,
        });
        console.log('Page shared successfully!');
        return;
      } catch (error) {
        console.error('Error sharing the page:', error);
        // fall back to clipboard
      }
    }
    // Fallback: copy URL to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('URL copied to clipboard. You can now share it manually.');
      } catch (err) {
        console.error('Clipboard write failed:', err);
        alert('Sharing is not supported in this browser, and copying to clipboard failed.');
      }
    } else {
      // Final fallback: prompt the user to copy manually
      const manualUrl = window.location.href;
      prompt('Copy this URL to share:', manualUrl);
    }
  };

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        zIndex: 1000,
        // backgroundColor: navbarBgColor,
        // borderBottom: `4px solid ${navbarBorderColor}`,
        transition: 'background-color 0.5s',
      }}
    >
      {/* --- LADO IZQUIERDO: LOGO --- */}
      <Box
        component="img"
        src={mode === 'dark' ? logoWhite : logoDarck}
        alt="Logo"
        onClick={() => window.location.reload()}
        sx={{
          padding: '5px 1px 1px 8px',
          height: '30px',
          cursor: 'pointer',
          transition: 'opacity 0.3s ease',
          userSelect: 'none',
        }}
      />

      <Box>
        <IconButton
          onClick={onToggleMode}
          aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          sx={{
            ...iconBaseStyle,
            color: iconColor,
          }}
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton
          onClick={handleShare}
          aria-label="Share"
          title="Share"
          sx={{
            ...iconBaseStyle,
            color: iconColor,
          }}
        >
          <IosShareIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;