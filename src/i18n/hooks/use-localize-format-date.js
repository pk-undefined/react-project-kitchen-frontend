import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import { getFormattedDate } from '../common/functions';

export const useLocalizeFormatDate = (date) => {
  const { i18n } = useTranslation();
  const [local, setLocal] = useState(i18n.language);

  useEffect(() => {
    setLocal(i18n.language);
  }, [i18n.language]);

  const formattedDate = useMemo(() => getFormattedDate(new Date(date), local), [local]);

  return formattedDate;
};
