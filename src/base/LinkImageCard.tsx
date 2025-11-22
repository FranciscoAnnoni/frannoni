import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';

interface LinkImageCardProps {
    label: string;
    url: string;
    imageUrl: string;
}

const LinkImageCard: React.FC<LinkImageCardProps> = ({ label, url, imageUrl }) => {
    return (
        <Card
            sx={{
                width: '100%',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                marginBottom: 2,
                border: '1px solid',
                borderColor: 'divider',
                color: 'inherit',
            }}
        >
            <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
                <CardMedia
                    component="img"
                    height="200"
                    image={imageUrl}
                    alt={label}
                    sx={{
                        objectFit: 'cover',
                    }}
                />
                <CardContent sx={{
                    padding: '12px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="button" sx={{ fontWeight: 600, fontSize: '1rem', textTransform: 'none', flexGrow: 1, textAlign: 'center', color: 'inherit' }}>
                        {label}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default LinkImageCard;
