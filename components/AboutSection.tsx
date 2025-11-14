'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';

export default function AboutSection() {
  const { t } = useLocale();

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.5)' : 'rgba(245, 245, 245, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 4 }}
          >
            {t.about.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
              mb: 6,
            }}
          >
            {t.about.description}
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {portfolioConfig.developer.skills.map((skill, index) => (
              <Grid item xs="auto" key={skill}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
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
                </motion.div>
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography variant="h6" component="p">
                      {value}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

