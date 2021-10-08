import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { RU, i18nextCookies } from '../common/constants';

export const useInitialI18nFromCookie = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLocale = Cookies.get(i18nextCookies) || RU;

    i18n.changeLanguage(currentLocale);
  }, []);
};
