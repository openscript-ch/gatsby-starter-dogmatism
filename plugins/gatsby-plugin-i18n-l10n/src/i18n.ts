import deCHMessages from '../content/i18n/de-CH.json';
import enUSMessages from '../content/i18n/en-US.json';

export const languages = ['de', 'en'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'de';
export type Translation = { [key in Language]: { [key: string]: string } };

export const slugTranslation: Translation = {
  de: {
    '/imprint': '/impressum',
    '/gallery': '/galerie'
  },
  en: {}
};

export const localeTranslation: { [key in Language]: string } = {
  de: 'Deutsch',
  en: 'English'
};

export const contentTranslation: Translation = {
  de: {
    ...localeTranslation,
    ...slugTranslation.de,
    ...deCHMessages
  },
  en: {
    ...localeTranslation,
    ...slugTranslation.en,
    ...enUSMessages
  }
};

export function translate(language: string, id: string) {
  if (contentTranslation[language as Language][id]) {
    return contentTranslation[language as Language][id];
  } else {
    return id;
  }
}
