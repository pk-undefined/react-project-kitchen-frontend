import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledInfo } from './styled-info';

const Info = () => {
  const { t } = useTranslation();
  return (
    <StyledInfo>
      <h2>{t('wrongText')}</h2>
      <h4>{t('wrongText2')}</h4>
    </StyledInfo>
  );
};

export default Info;
