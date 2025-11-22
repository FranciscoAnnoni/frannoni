import React from 'react';
import { Box } from '@mui/material';

interface CustomDividerProps {
    mode: 'light' | 'dark';
}

const CustomDivider: React.FC<CustomDividerProps> = ({ mode }) => {
    // Color del divider según el modo
    const dividerColor = mode === 'dark' ? 'rgba(255, 255, 255, 0.49)' : 'rgba(64, 64, 64, 0.7)';

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '200px',
                height: '2px', // Grosor de la línea (puedes cambiar a 3px, 4px, etc.)
                mb: 3,
                userSelect: 'none',
                background: `repeating-linear-gradient(
          to right,
          ${dividerColor} 0px,
          ${dividerColor} 5px,
          transparent 5px,
          transparent 10px
        )`,
                transition: 'background 0.3s ease', // Transición suave al cambiar de modo
            }}
        />
    );
};

export default CustomDivider;
