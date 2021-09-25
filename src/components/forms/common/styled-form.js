import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1108px;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const StyledForm = styled.form`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 32px;
`;

export const Title = styled.h2`
  width: 100%;
  height: 40px;
  margin: 16px 0px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
  color: white;
  font-family: "Press Start 2P";
`;

export const RegLink = styled.p`
  width: 100%;
  height: 24px;
  margin: 24px 0px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: "Consolas";
  text-decoration: underline;
  a {
    color: rgba(255, 0, 0, 1);
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: '#ff0000';
  font-family: 'Consolas', Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  transition: opacity 0.5s linear;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const StyledCommentForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width:728px;
  margin: 0 0 32px 0;
  background: var(--bg-color-secondary);
`;

export const InfoContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
