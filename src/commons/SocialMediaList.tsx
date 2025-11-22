import React from 'react';
import { Stack } from '@mui/material';
import LinkSocialMedia from '../base/LinkSocialMedia';
import socialLinks from '../data/LinksSocialMedia.json';

interface SocialMediaListProps {
    mode: 'light' | 'dark';
}

const SocialMediaList: React.FC<SocialMediaListProps> = ({ mode }) => {
    return (
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            {socialLinks.map((link) => (
                <LinkSocialMedia
                    key={link.id}
                    name={link.name}
                    url={link.url}
                    iconName={link.iconName}
                    hoverColor={link.hoverColor}
                    mode={mode}
                />
            ))}
        </Stack>
    );
};

export default SocialMediaList;
