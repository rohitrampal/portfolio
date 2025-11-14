'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';

export default function ProjectsSection() {
  const { t } = useLocale();

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.3)' : 'rgba(255, 255, 255, 0.5)',
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
            {t.projects.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
          >
            {t.projects.subtitle}
          </Typography>

          <Grid container spacing={4}>
            {portfolioConfig.projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: '60px' }}
                      >
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
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
                    <CardActions>
                      <Button size="small" color="primary">
                        {t.projects.viewDetails}
                      </Button>
                      <Button size="small" color="primary">
                        {t.projects.learnMore}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

