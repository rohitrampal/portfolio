import { locales, type LocaleData } from '@/locales';

export type Locale = 
  | 'en' 
  | 'fr' 
  | 'ne-NP' 
  | 'ru' 
  | 'ar' 
  | 'az' 
  | 'zh-CN' 
  | 'nl' 
  | 'gu' 
  | 'hi' 
  | 'id' 
  | 'ga' 
  | 'ks' 
  | 'la' 
  | 'ml' 
  | 'pi' 
  | 'sa' 
  | 'te' 
  | 'uz';

export const localeList: Locale[] = [
  'en', 
  'fr', 
  'ne-NP', 
  'ru', 
  'ar', 
  'az', 
  'zh-CN', 
  'nl', 
  'gu', 
  'hi', 
  'id', 
  'ga', 
  'ks', 
  'la', 
  'ml', 
  'pi', 
  'sa', 
  'te', 
  'uz'
];

export const defaultLocale: Locale = 'en';

export const translations: Record<Locale, LocaleData> = locales as Record<Locale, LocaleData>;

export function getTranslations(locale: Locale): LocaleData {
  return translations[locale] || translations[defaultLocale];
}
