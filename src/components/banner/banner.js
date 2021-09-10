import React from 'react';
import { StyledBanner, BannerTitle, BannerSubTitle } from './styled-banner';

const Banner = (props) => (
  <StyledBanner {...props}>
    <BannerTitle>Проектная кухня</BannerTitle>
    <BannerSubTitle>Место, где готовится новый опыт</BannerSubTitle>
  </StyledBanner>
);

export default Banner;
