import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: rgba(235, 235, 235, 1);
  font-family: "Consolas";
  font-weight: 700;
  text-align: center;
  background-color: #ff0000;
  border: 1.5px solid rgba(235, 235, 235, 1);
  border-radius: 2px;
  padding: 0 16px 0 16px;
  margin: 40px 0 32px 0;
  align-self: flex-end;
  transition: opacity 0.5s linear;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
