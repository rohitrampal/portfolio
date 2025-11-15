// Locale exports
import { en } from './en';
import { fr } from './fr';
import { ru } from './ru';
import { ar } from './ar';
import { neNP } from './ne-NP';
import { az } from './az';
import { zhCN } from './zh-CN';
import { nl } from './nl';
import { gu } from './gu';
import { hi } from './hi';
import { id } from './id';
import { ga } from './ga';
import { ks } from './ks';
import { la } from './la';
import { ml } from './ml';
import { pi } from './pi';
import { sa } from './sa';
import { te } from './te';
import { uz } from './uz';
import type { LocaleData } from './en';

export const locales: Record<string, LocaleData> = {
  en,
  fr,
  ru,
  ar,
  'ne-NP': neNP,
  az,
  'zh-CN': zhCN,
  nl,
  gu,
  hi,
  id,
  ga,
  ks,
  la,
  ml,
  pi,
  sa,
  te,
  uz,
};

export type { LocaleData };

