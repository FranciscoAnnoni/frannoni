import React from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
import TikTokIcon from './TikTokIcon';
import suscribiteWhite from '../assets/suscribiteWhite1.svg';
import suscribiteBlack from '../assets/suscribiteBlack.svg';

interface LinkSocialMediaProps {
    iconName: string;
    url: string;
    name: string;
    hoverColor?: string;
    mode?: 'light' | 'dark';
}

const LinkSocialMedia: React.FC<LinkSocialMediaProps> = ({ iconName, url, name, hoverColor, mode }) => {
    const isYouTube = name === 'YouTube';

    // Dynamic icon rendering - use custom TikTok icon if needed
    let IconComponent;
    if (iconName === 'TikTok') {
        IconComponent = TikTokIcon;
    } else {
        IconComponent = (MuiIcons as any)[iconName] || MuiIcons.Link;
    }

    return (
        <Tooltip title={name}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                {/* Background SVG for YouTube */}
                {isYouTube && (
                    <Box
                        component="img"
                        src={mode === 'dark' ? suscribiteWhite : suscribiteBlack}
                        alt="Suscríbete"
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            left: '160%',
                            transform: 'translate(-50%, -50%)',
                            width: '70px',
                            height: 'auto',
                            zIndex: 1000,
                            pointerEvents: 'none',
                            opacity: 0.75,
                        }}
                    />
                )}

                {/* Icon Button */}
                <IconButton
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        color: 'inherit',
                        transition: 'transform 0.2s, color 0.2s',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            color: hoverColor || 'primary.main',
                        },
                    }}
                >
                    <IconComponent fontSize="large" />
                </IconButton>
            </Box>
        </Tooltip>
    );
};

export default LinkSocialMedia;
