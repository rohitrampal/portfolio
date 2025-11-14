'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        pt: 10,
        pb: 5,
        overflow: 'hidden',
      }}
    >
      <ThreeBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            ref={nameRef}
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '4rem', sm: '6rem', md: '8rem', lg: '10rem' },
              fontWeight: 700,
              letterSpacing: { xs: '-0.02em', md: '-0.04em' },
              lineHeight: 0.9,
              mb: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #fff 0%, #90caf9 100%)'
                  : 'linear-gradient(135deg, #000 0%, #1976d2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {portfolioConfig.developer.name.toUpperCase()}
          </Typography>

          <Typography
            ref={taglineRef}
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
              mb: 3,
              letterSpacing: '0.1em',
            }}
          >
            {t.home.tagline}
          </Typography>

          <Typography
            ref={descriptionRef}
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: 'text.secondary',
              mb: 6,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            {t.home.description}
          </Typography>

          <Stack
            ref={buttonRef}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              sx={{
                px: 5,
                py: 1.8,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                borderRadius: 0,
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
                gap: 2,
                mt: { xs: 2, sm: 0 },
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                }}
              >
                {t.home.availableForWork}
              </Typography>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'success.main',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': {
                      opacity: 1,
                    },
                    '50%': {
                      opacity: 0.5,
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

