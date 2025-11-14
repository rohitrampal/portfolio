'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 85%',
        },
      });

      valuesRef.current.forEach((value, index) => {
        if (value) {
          gsap.from(value, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: value,
              start: 'top 85%',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.5)' : 'rgba(245, 245, 245, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <Box ref={titleRef} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t.about.title}
          </Typography>
        </Box>

        <Typography
          ref={descriptionRef}
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 8,
            color: 'text.secondary',
          }}
        >
          {t.about.description}
        </Typography>

          <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
            {portfolioConfig.developer.skills.map((skill, index) => (
              <Grid item xs="auto" key={skill}>
                <Chip
                  label={skill}
                  sx={{
                    fontSize: '1rem',
                    py: 2.5,
                    px: 1,
                  }}
                  color="primary"
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ textAlign: 'center', mb: 4, mt: 6 }}
          >
            {t.about.ourValues}
          </Typography>

          <Grid container spacing={3}>
            {portfolioConfig.about.values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={value}>
                <Paper
                  ref={(el) => {
                    if (el) valuesRef.current[index] = el;
                  }}
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    backgroundColor: 'transparent',
                    border: (theme) =>
                      `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 10px 40px rgba(144, 202, 249, 0.2)'
                          : '0 10px 40px rgba(25, 118, 210, 0.2)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: 600,
                    }}
                  >
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
      </Container>
    </Box>
  );
}

