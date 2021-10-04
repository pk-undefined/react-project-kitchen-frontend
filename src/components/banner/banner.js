import React from 'react';
import { StyledBanner, BannerTitle, BannerSubTitle } from './styled-banner';

const Banner = (props) => (
  <StyledBanner {...props}>
    <BannerTitle>CHA-lle-NGE</BannerTitle>
    <BannerSubTitle>Брось себе вызов и делись успехом!</BannerSubTitle>
  </StyledBanner>
);

export default Banner;
