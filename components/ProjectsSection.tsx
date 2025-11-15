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
  Button,
} from '@mui/material';
import { ArrowBack, ArrowForward, Launch, Code } from '@mui/icons-material';
import { useLocale } from '@/contexts/LocaleContext';
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
  const projects = t.projects.items.slice(0, 6);

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
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 5 },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.3)' : 'rgba(255, 255, 255, 0.5)',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%', px: { xs: 2, sm: 3 } }}>
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

          <Box sx={{ position: 'relative', minHeight: '550px', overflow: 'hidden', width: '100%' }}>
            {projects.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '100%',
                  textAlign: 'center',
                  opacity: currentIndex === index ? 1 : 0,
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  transition: 'all 0.5s ease',
                  pointerEvents: currentIndex === index ? 'auto' : 'none',
                  left: 0,
                  right: 0,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.8) 0%, rgba(30, 30, 30, 0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 250, 250, 0.95) 100%)',
                    border: (theme) =>
                      `2px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`,
                    borderRadius: 4,
                    boxShadow: (theme) =>
                      theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 16px 48px rgba(0, 0, 0, 0.6), 0 0 24px rgba(25, 118, 210, 0.3)'
                          : '0 16px 48px rgba(0, 0, 0, 0.15), 0 0 24px rgba(25, 118, 210, 0.2)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, transparent, primary.main, transparent)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Decorative gradient overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'radial-gradient(circle, rgba(25, 118, 210, 0.1) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, transparent 70%)',
                      filter: 'blur(40px)',
                      transition: 'transform 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 5 }, position: 'relative', zIndex: 1 }}>
                    {/* Project Icon/Number Badge */}
                    {/* <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.2), rgba(25, 118, 210, 0.1))'
                            : 'linear-gradient(135deg, rgba(25, 118, 210, 0.15), rgba(25, 118, 210, 0.05))',
                        border: '2px solid',
                        borderColor: 'primary.main',
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Code sx={{ fontSize: 32, color: 'primary.main' }} />
                    </Box> */}

                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                        fontWeight: 700,
                        mb: 2,
                        background: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)'
                            : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#1976d2',
                      }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 4,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.8,
                        maxWidth: '700px',
                        mx: 'auto',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      flexWrap="wrap" 
                      gap={1.5} 
                      justifyContent="center"
                      sx={{ mb: 4 }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="medium"
                          variant="outlined"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            px: 1,
                            py: 2.5,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              transform: 'translateY(-2px)',
                              boxShadow: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? '0 4px 12px rgba(25, 118, 210, 0.4)'
                                  : '0 4px 12px rgba(25, 118, 210, 0.3)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                    {project.link && (
                      <Button
                        variant="contained"
                        endIcon={<Launch />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          mt: 2,
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 600,
                          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                          boxShadow: '0 4px 16px rgba(25, 118, 210, 0.4)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                            boxShadow: '0 6px 20px rgba(25, 118, 210, 0.5)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {t.projects.viewProject}
                      </Button>
                    )}
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

