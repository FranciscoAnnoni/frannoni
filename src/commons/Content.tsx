import React from 'react';
import { Box } from '@mui/material';
import ProfileImage from '../base/ProfileImage';
import ProfileInfo from '../base/ProfileInfo';
import CustomDivider from '../base/CustomDivider';
import SocialMediaList from './SocialMediaList';
import PageLinksList from './PageLinksList';

interface ContentProps {
  mode: 'light' | 'dark';
}

const Content: React.FC<ContentProps> = ({ mode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <ProfileImage mode={mode} />
      <ProfileInfo />

      <SocialMediaList mode={mode} />

      <CustomDivider mode={mode} />

      <PageLinksList />
    </Box>
  );
};

export default Content;