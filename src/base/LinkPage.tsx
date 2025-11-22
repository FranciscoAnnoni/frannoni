import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';

interface LinkPageProps {
    label: string;
    url: string;
    iconName?: string;
}

const LinkPage: React.FC<LinkPageProps> = ({ label, url, iconName }) => {
    const IconComponent = iconName ? (MuiIcons as any)[iconName] : null;

    return (
        <Button
            variant="outlined"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                padding: '12px 24px',
                borderRadius: '12px',
                borderColor: 'divider',
                color: 'inherit', // Inherit text color
                backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slight background for visibility
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
                marginBottom: 2,
            }}
            startIcon={IconComponent ? <IconComponent /> : null}
        >
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="button" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    {label}
                </Typography>
            </Box>
        </Button>
    );
};

export default LinkPage;
