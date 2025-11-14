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
    </Slide>
  );
}

