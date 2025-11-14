'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  IconButton,
  Paper,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const { t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projects = portfolioConfig.projects.slice(0, 6);

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
    });

    return () => ctx.revert();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.3)' : 'rgba(255, 255, 255, 0.5)',
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
            {t.projects.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.2rem' },
              mb: 2,
            }}
          >
            {t.projects.subtitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            {t.projects.description}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            <IconButton
              onClick={prevProject}
              sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ArrowBack />
            </IconButton>
            {projects.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backgroundColor: currentIndex === index ? 'primary.main' : 'transparent',
                  border: (theme) =>
                    `2px solid ${currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.3)'}`,
                  color: currentIndex === index ? 'white' : 'text.secondary',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                {index}
              </Box>
            ))}
            <IconButton
              onClick={nextProject}
              sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>

          <Box sx={{ position: 'relative', minHeight: '500px' }}>
            {projects.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  textAlign: 'center',
                  opacity: currentIndex === index ? 1 : 0,
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  transition: 'all 0.5s ease',
                  pointerEvents: currentIndex === index ? 'auto' : 'none',
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                        fontWeight: 700,
                        mb: 2,
                        
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.8,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} justifyContent="center">
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

