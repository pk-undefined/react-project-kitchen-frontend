import React from 'react';
import styled from 'styled-components';

const BannerTitle = styled.h1`
  color: #ff0000;
  text-shadow: 2px 2px 0px #ffffff;
  margin-bottom: 8px;
`;

const BannerSubTitle = styled.span`
  font-size: 16px;
  line-height: 28px;
  font-family: 'Press Start 2P';
`;

const StyledBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  box-shadow: inset 0px -1px 0px #1f1f1f;
  text-align: center;
`;

const Banner = (props) => {
  return (
    <StyledBanner {...props}>
      <BannerTitle>Проектная кухня</BannerTitle>
      <BannerSubTitle>Место, где готовится новый опыт</BannerSubTitle>
    </StyledBanner>
  );
};

export default Banner;
