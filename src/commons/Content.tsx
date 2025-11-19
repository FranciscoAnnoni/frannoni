import React from 'react';
import { Box } from '@mui/material';
import Profile from '../assets/profile.jpg';

const Content = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={Profile}
        alt="Profile"
        sx={{
          width: '150px',
          height: '150px',
          borderRadius: '10px',
          objectFit: 'cover',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.48)', // Add shadow effect
        }}
      />
    </Box>
  );
};

export default Content;