'use client';

import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';

export default function Footer() {
  const { t } = useLocale();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(245, 245, 245, 0.8)',
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            {t.footer.copyright}
          </Typography>
          <Stack direction="row" spacing={1}>
            {portfolioConfig.contact.social.linkedin && (
              <IconButton
                component={Link}
                href={portfolioConfig.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <LinkedIn />
              </IconButton>
            )}
            {portfolioConfig.contact.social.github && (
              <IconButton
                component={Link}
                href={portfolioConfig.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <GitHub />
              </IconButton>
            )}
            {portfolioConfig.contact.social.twitter && (
              <IconButton
                component={Link}
                href={portfolioConfig.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <Twitter />
              </IconButton>
            )}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {t.footer.builtWith}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

