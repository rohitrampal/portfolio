'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SkillsSection() {
  const { t } = useLocale();
  
  const skillCategories = {
    [t.skills.category1]: t.skills.skillsList.languages,
    [t.skills.category2]: t.skills.skillsList.frameworks,
    [t.skills.category3]: t.skills.skillsList.concepts,
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement[]>([]);

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

      categoriesRef.current.forEach((category, index) => {
        if (category) {
          gsap.from(category, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: category,
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
      id="skills"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.5)' : 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <Box ref={titleRef} sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t.skills.title}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Grid item xs={12} md={4} key={category}>
              <Paper
                ref={(el) => {
                  if (el) categoriesRef.current[index] = el;
                }}
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: (theme) =>
                    `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  {category}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                  }}
                >
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={`# ${skill}`}
                      sx={{
                        fontSize: '1rem',
                        py: 2,
                        px: 1,
                        fontWeight: 500,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.05)',
                        color: 'text.primary',
                        border: 'none',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
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

