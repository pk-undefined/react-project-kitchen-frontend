import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledInfo } from './styled-info';

const Info = ({ error, errorInfo }) => {
  const { t } = useTranslation();
  return (
    <StyledInfo>
      <h2>{t('wrongText')}</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </details>
    </StyledInfo>
  );
};

export default Info;
