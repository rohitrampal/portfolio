'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import { Brightness4, Brightness7, Language } from '@mui/icons-material';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocale } from '@/contexts/LocaleContext';
import { Locale } from '@/lib/i18n';

const sections = [
  { id: 'home', key: 'home' },
  { id: 'services', key: 'services' },
  { id: 'projects', key: 'projects' },
  { id: 'skills', key: 'skills' },
  { id: 'about', key: 'about' },
  { id: 'contact', key: 'contact' },
];

export default function Navbar() {
  const { mode, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [activeSection, setActiveSection] = useState('home');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Get all sections and their positions
      const sectionPositions = sections.map((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            height: rect.height,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number; height: number }>;

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      // Check if we're at the top of the page
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Find the section that's currently in view
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = sectionPositions[i];
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          setActiveSection(section.id);
          return;
        }
      }

      // If scrolled past all sections, set the last one as active
      if (sectionPositions.length > 0) {
        const lastSection = sectionPositions[sectionPositions.length - 1];
        if (scrollPosition >= lastSection.top) {
          setActiveSection(lastSection.id);
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' 
            ? scrolled 
              ? 'rgba(18, 18, 18, 0.95)' 
              : 'rgba(18, 18, 18, 0.9)'
            : scrolled
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled ? 4 : 1,
        transition: 'all 0.3s ease',
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              sx={{
                color: activeSection === section.id ? 'primary.main' : 'text.primary',
                fontWeight: activeSection === section.id ? 700 : 400,
                fontSize: '0.95rem',
                textTransform: 'none',
                position: 'relative',
                px: 2,
                py: 1,
                transition: 'all 0.3s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: activeSection === section.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                  width: '60%',
                  height: '2px',
                  backgroundColor: 'primary.main',
                  transition: 'transform 0.3s ease',
                },
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'transparent',
                  '&::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                },
              }}
            >
              {t.nav[section.key as keyof typeof t.nav]}
            </Button>
          ))}
        </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', color: mode === 'dark' ? 'white' : 'black'   }}>
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
            <MenuItem
              onClick={() => handleLanguageChange('ru')}
              selected={locale === 'ru'}
            >
              Русский
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('ar')}
              selected={locale === 'ar'}
            >
              العربية
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('ne-NP')}
              selected={locale === 'ne-NP'}
            >
              नेपाली
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('az')}
              selected={locale === 'az'}
            >
              Azərbaycan
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('zh-CN')}
              selected={locale === 'zh-CN'}
            >
              中文
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('nl')}
              selected={locale === 'nl'}
            >
              Nederlands
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('gu')}
              selected={locale === 'gu'}
            >
              ગુજરાતી
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('hi')}
              selected={locale === 'hi'}
            >
              हिन्दी
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('id')}
              selected={locale === 'id'}
            >
              Bahasa Indonesia
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('ga')}
              selected={locale === 'ga'}
            >
              Gaeilge
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('ks')}
              selected={locale === 'ks'}
            >
              कॉशुर
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('la')}
              selected={locale === 'la'}
            >
              Latina
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('ml')}
              selected={locale === 'ml'}
            >
              മലയാളം
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('pi')}
              selected={locale === 'pi'}
            >
              पालि
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('sa')}
              selected={locale === 'sa'}
            >
              संस्कृतम्
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('te')}
              selected={locale === 'te'}
            >
              తెలుగు
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange('uz')}
              selected={locale === 'uz'}
            >
              O'zbek
            </MenuItem>
            </Menu>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

