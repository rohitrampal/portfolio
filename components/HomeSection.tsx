'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';

export default function HomeSection() {
  const { t } = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #121212 0%, #1e1e1e 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                textAlign: 'center',
                mb: 2,
              }}
            >
              {t.home.title}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                textAlign: 'center',
                color: 'text.secondary',
                mb: 2,
              }}
            >
              {t.home.tagline}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              component="p"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              {t.home.role}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack
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
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                {t.home.hireMe}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                {t.home.contact}
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}

