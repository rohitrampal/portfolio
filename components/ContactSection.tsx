'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

export default function ContactSection() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.emailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.contact.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setOpen(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccess(false);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.3)' : 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Container maxWidth="md">
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
            {t.contact.title}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}
          >
            {t.contact.subtitle}
          </Typography>

          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={t.contact.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t.contact.email}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t.contact.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                margin="normal"
                multiline
                rows={6}
                required
              />
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                  disabled={loading}
                >
                  {loading ? t.contact.sending : t.contact.send}
                </Button>
              </Box>
            </form>
          </Paper>
        </motion.div>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleClose}
            severity={success ? 'success' : 'error'}
            sx={{ width: '100%' }}
          >
            {success ? t.contact.success : t.contact.error}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

