'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

export default function ClientsSection() {
  const { t } = useLocale();

  return (
    <Box
      id="clients"
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
            {t.clients.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
          >
            {t.clients.subtitle}
          </Typography>

          <Grid container spacing={4}>
            {t.clients.items.map((client, index) => (
              <Grid item xs={12} md={6} key={client.id}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            bgcolor: 'primary.main',
                            fontSize: '1.5rem',
                          }}
                        >
                          {client.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" component="h3">
                            {client.name}
                          </Typography>
                          {client.role && (
                            <Typography variant="body2" color="text.secondary">
                              {client.role}
                            </Typography>
                          )}
                        </Box>
                      </Stack>
                      {client.testimonial && (
                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                          "{client.testimonial}"
                        </Typography>
                      )}
                    </CardContent>
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

