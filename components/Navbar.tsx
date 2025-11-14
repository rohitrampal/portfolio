'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
} from '@mui/material';
import { Brightness4, Brightness7, Language } from '@mui/icons-material';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocale } from '@/contexts/LocaleContext';
import { Locale } from '@/lib/i18n';

const sections = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'projects', key: 'projects' },
  { id: 'tech-stack', key: 'techStack' },
  { id: 'pricing', key: 'pricing' },
  { id: 'clients', key: 'clients' },
  { id: 'contact', key: 'contact' },
];

export default function Navbar() {
  const { mode, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [activeSection, setActiveSection] = useState('home');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    handleLanguageMenuClose();
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: trigger ? 2 : 0,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                sx={{
                  color: activeSection === section.id ? 'primary.main' : 'text.primary',
                  fontWeight: activeSection === section.id ? 600 : 400,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {t.nav[section.key as keyof typeof t.nav]}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <IconButton onClick={handleLanguageMenuOpen} color="inherit">
              <Language />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageMenuClose}
            >
              <MenuItem
                onClick={() => handleLanguageChange('en')}
                selected={locale === 'en'}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => handleLanguageChange('fr')}
                selected={locale === 'fr'}
              >
                Français
              </MenuItem>
            </Menu>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

