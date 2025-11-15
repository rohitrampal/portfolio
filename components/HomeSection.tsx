'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useLocale } from '@/contexts/LocaleContext';
import { gsap } from 'gsap';
import ThreeBackground from './ThreeBackground';

export default function HomeSection() {
  const { t } = useLocale();
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current) return;

    const ctx = gsap.context(() => {
      // Animate hero name with scale and fade
      if (nameRef.current) {
        gsap.from(nameRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 50,
          duration: 1.2,
          ease: 'power3.out',
        });
      }

      // Animate tagline
      if (taglineRef.current) {
        gsap.from(taglineRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.5,
        });
      }

      // Animate description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.8,
        });
      }

      // Animate button
      if (buttonRef.current) {
        gsap.from(buttonRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          delay: 1.1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="home"
      ref={heroRef}
      sx={{
        minHeight: { xs: 'calc(100vh - 64px)', sm: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 4, sm: 5, md: 6 },
        overflowX: 'hidden',
        overflowY: 'auto',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <ThreeBackground />
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%',
          maxWidth: '100%',
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ 
          textAlign: 'center', 
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}>
          <Typography
            ref={nameRef}
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '1.75rem', sm: '3.5rem', md: '5rem', lg: '7rem', xl: '8rem' },
              fontWeight: 700,
              letterSpacing: { xs: '-0.005em', sm: '-0.02em', md: '-0.04em' },
              lineHeight: { xs: 1.2, sm: 0.95, md: 0.9 },
              mb: { xs: 1.5, sm: 2, md: 2.5 },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              whiteSpace: 'normal',
              px: { xs: 1, sm: 2, md: 0 },
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #fff 0%, #90caf9 100%)'
                  : 'linear-gradient(135deg, #000 0%, #1976d2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.home.name.toUpperCase() || 'PORTFOLIO'}
          </Typography>

          <Typography
            ref={taglineRef}
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '0.95rem', sm: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
              mb: { xs: 2, sm: 2.5, md: 3 },
              letterSpacing: { xs: '0.03em', sm: '0.08em', md: '0.1em' },
              px: { xs: 1.5, sm: 2, md: 0 },
              lineHeight: { xs: 1.5, sm: 1.4, md: 1.3 },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              whiteSpace: 'normal',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            {t.home.tagline}
          </Typography>

          <Typography
            ref={descriptionRef}
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: 'text.secondary',
              mb: { xs: 4, sm: 5, md: 6 },
              width: '100%',
              maxWidth: { xs: '100%', sm: '600px', md: '700px' },
              mx: 'auto',
              lineHeight: { xs: 1.7, sm: 1.75, md: 1.8 },
              px: { xs: 1.5, sm: 2, md: 0 },
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              whiteSpace: 'normal',
              textAlign: { xs: 'left', sm: 'center' },
              boxSizing: 'border-box',
            }}
          >
            {t.home.description}
          </Typography>

          <Stack
            ref={buttonRef}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2.5, sm: 2 }}
            alignItems="center"
            justifyContent="center"
            sx={{ 
              mt: { xs: 3, sm: 4, md: 5 },
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
            }}
          >
            <Button
              variant="contained"
              size="large"
              fullWidth={false}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              sx={{
                px: { xs: 4, sm: 5, md: 6 },
                py: { xs: 1.5, sm: 1.8, md: 2 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                textTransform: 'uppercase',
                letterSpacing: { xs: '0.08em', sm: '0.1em' },
                fontWeight: 600,
                borderRadius: { xs: 1, sm: 0 },
                minWidth: { xs: '200px', sm: 'auto' },
                width: { xs: '100%', sm: 'auto' },
                maxWidth: { xs: '100%', sm: 'none' },
                boxSizing: 'border-box',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {t.home.contactButton} ↗
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1.5, sm: 2 },
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: { xs: '100%', sm: 'auto' },
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.95rem' },
                  whiteSpace: { xs: 'normal', sm: 'nowrap' },
                  wordBreak: { xs: 'break-word', sm: 'normal' },
                  textAlign: 'center',
                }}
              >
                {t.home.availableForWork}
              </Typography>
              <Box
                sx={{
                  width: { xs: 7, sm: 8 },
                  height: { xs: 7, sm: 8 },
                  borderRadius: '50%',
                  backgroundColor: 'success.main',
                  animation: 'pulse 2s infinite',
                  flexShrink: 0,
                  '@keyframes pulse': {
                    '0%, 100%': {
                      opacity: 1,
                      transform: 'scale(1)',
                    },
                    '50%': {
                      opacity: 0.6,
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

