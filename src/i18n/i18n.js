import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { EN, RU } from './common/constants';
import { TRANSLATIONS_EN } from './resources/en/translations';
import { TRANSLATIONS_RU } from './resources/ru/translations';

export default i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [EN]: {
        translation: TRANSLATIONS_EN,
      },
      [RU]: {
        translation: TRANSLATIONS_RU,
      },
    },
    cookieName: 'lang',
    useCookie: true,
    fallbackLng: RU,
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });
