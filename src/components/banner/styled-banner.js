import styled from 'styled-components';

export const BannerTitle = styled.h1`
  color: #f00;
  text-shadow: 2px 2px 0 #fff;
  margin-bottom: 8px;
`;

export const BannerSubTitle = styled.span`
  font-size: 16px;
  line-height: 28px;
  font-family: 'Press Start 2P', Arial, sans-serif;
`;

export const StyledBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  box-shadow: inset 0 -1 0 #1f1f1f;
  text-align: center;
`;
