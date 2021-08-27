import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #ff0000;
  text-shadow: 2px 2px 0px #ffffff;
  margin-bottom: 8px;
`;

const StyledBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background: #0a0a0a;
  box-shadow: inset 0px -1px 0px #1f1f1f;
  font-size: 16px;
  line-height: 28px;
  font-family: 'Press Start 2P';
  text-align: center;
`;

const Banner = (props) => {
  return (
    <StyledBanner {...props}>
      <Title>Проектная кухня</Title>
      Место, где готовится новый опыт
    </StyledBanner>
  );
};

export default Banner;
