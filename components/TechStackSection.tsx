'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';

export default function TechStackSection() {
  const { t } = useLocale();

  const categories = {
    frontend: portfolioConfig.techStack.filter((t) => t.category === 'frontend'),
    backend: portfolioConfig.techStack.filter((t) => t.category === 'backend'),
    database: portfolioConfig.techStack.filter((t) => t.category === 'database'),
    tool: portfolioConfig.techStack.filter((t) => t.category === 'tool'),
    other: portfolioConfig.techStack.filter((t) => t.category === 'other'),
    analytics: portfolioConfig.techStack.filter((t) => t.category === 'analytics'),
  };

  return (
    <Box
      id="tech-stack"
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
            sx={{ textAlign: 'center', mb: 2 }}
          >
            {t.techStack.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
          >
            {t.techStack.subtitle}
          </Typography>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            {Object.entries(categories).map(([category, items]) => (
              <Grid item xs={12} sm={6} md={4} key={category}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {items.map((item) => (
                        <Chip
                          key={item.name}
                          label={item.name}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ textAlign: 'center', mb: 4 }}
          >
            {t.techStack.services}
          </Typography>

          <Grid container spacing={3}>
            {portfolioConfig.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service}>
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
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Typography variant="h6" component="p">
                      {service}
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

