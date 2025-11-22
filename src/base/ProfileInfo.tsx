import React, { useState } from 'react';
import { Box, Typography, Snackbar } from '@mui/material';

const ProfileInfo: React.FC = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handle = '@Frannoni';

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(handle);
            setOpenSnackbar(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
            <Typography variant="h5"
                onClick={handleCopyToClipboard}
                sx={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    marginBottom: 0.5,
                    userSelect: 'none',
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                }}>
                {handle}
            </Typography>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                message="¡Copiado al portapapeles!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Box>
    );
};

export default ProfileInfo;
