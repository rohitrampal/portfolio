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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { Check } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { portfolioConfig } from '@/config';

export default function PricingSection() {
  const { t } = useLocale();

  return (
    <Box
      id="pricing"
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
            {t.pricing.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
          >
            {t.pricing.subtitle}
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {portfolioConfig.pricing.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={plan.id}>
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
                      position: 'relative',
                      border: plan.popular
                        ? (theme) => `2px solid ${theme.palette.primary.main}`
                        : 'none',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    {plan.popular && (
                      <Chip
                        label={t.pricing.popular}
                        color="primary"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, pt: plan.popular ? 6 : 3 }}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        {plan.name}
                      </Typography>
                      <Typography variant="h3" component="p" sx={{ my: 2 }}>
                        {plan.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {t.pricing.perProject}
                      </Typography>
                      <List>
                        {plan.features.map((feature, idx) => (
                          <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <Check color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        fullWidth
                        variant={plan.popular ? 'contained' : 'outlined'}
                        size="large"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        {t.pricing.getStarted}
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

