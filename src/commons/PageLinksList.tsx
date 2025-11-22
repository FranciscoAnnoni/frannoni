import React from 'react';
import { Stack } from '@mui/material';
import LinkPage from '../base/LinkPage';
import pageLinks from '../data/LinkPages.json';

import LinkImageCard from '../base/LinkImageCard';

const PageLinksList: React.FC = () => {
    return (
        <Stack spacing={2} sx={{ width: '100%', maxWidth: '600px', mx: 'auto' }}>
            {pageLinks.map((link) => {
                if (link.type === 'image-card') {
                    return (
                        <LinkImageCard
                            key={link.id}
                            label={link.label}
                            url={link.url}
                            imageUrl={link.imageUrl || ''}
                        />
                    );
                }
                return (
                    <LinkPage
                        key={link.id}
                        label={link.label}
                        url={link.url}
                        iconName={link.iconName}
                    />
                );
            })}
        </Stack>
    );
};

export default PageLinksList;
