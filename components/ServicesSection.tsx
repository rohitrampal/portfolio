'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { useLocale } from '@/contexts/LocaleContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const { t } = useLocale();
  
  const services = [
    t.services.service1,
    t.services.service2,
    t.services.service3,
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
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
      id="services"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.5)' : 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <Box ref={titleRef} sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
            }}
          >
            {t.services.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {t.services.subtitle}
          </Typography>
        </Box>

        <Typography
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
          {t.services.intro}
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.number}>
              <Paper
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: (theme) =>
                    `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
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
                  sx={{
                    fontSize: '0.9rem',
                    color: 'primary.main',
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  ({service.number})
                </Typography>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {service.tech.map((tech, techIndex) => (
                    <Typography
                      key={techIndex}
                      variant="body2"
                      sx={{
                        fontSize: '0.9rem',
                        color: 'text.secondary',
                        fontFamily: 'monospace',
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

