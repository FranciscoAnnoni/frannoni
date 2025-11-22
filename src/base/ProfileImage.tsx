import React from 'react';
import { Avatar, Box } from '@mui/material';
import Profile from '../assets/profile.jpg';

interface ProfileImageProps {
    mode: 'light' | 'dark';
}

const ProfileImage: React.FC<ProfileImageProps> = ({ mode }) => {
    // Sombra más notoria en modo oscuro
    const boxShadow = mode === 'dark'
        ? '0 8px 24px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.4)'
        : '0 3px 9px rgba(0, 0, 0, 0.1)';

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Avatar
                alt="Profile Picture"
                src={Profile}
                variant="square"
                sx={{
                    width: 120,
                    height: 120,
                    border: '4px solid',
                    borderColor: 'background.paper',
                    boxShadow: boxShadow,
                    borderRadius: '20%',
                    transition: 'box-shadow 0.3s ease', // Transición suave al cambiar de modo
                }}
            />
        </Box>
    );
};

export default ProfileImage;
