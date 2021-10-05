import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { EN, RU, i18nextCookies } from '../../../i18n/common/constants';

export const TogglerLanguage = memo(() => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleOnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLanguage(language === RU ? EN : RU);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    document.title = t('projectName');
    Cookies.set(i18nextCookies, language);
  }, [language]);

  return (
    <a href="#" onClick={handleOnClick}>{`${language === RU ? EN : RU} `}</a>
  );
});
