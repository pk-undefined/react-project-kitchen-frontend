import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledBanner, BannerTitle, BannerSubTitle } from './styled-banner';

const Banner = (props) => {
  const { t } = useTranslation();
  return (
    <StyledBanner {...props}>
      <BannerTitle>{t('projectName')}</BannerTitle>
      <BannerSubTitle>{t('description')}</BannerSubTitle>
    </StyledBanner>
  );
};

export default Banner;
