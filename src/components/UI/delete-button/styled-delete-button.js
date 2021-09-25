import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  box-shadow: none;
  border: none;
  width: 24px;
  height: 40px;
  background: transparent;
  transition: opacity 0.5s linear;
  &:hover{
    opacity: 0.6;
    cursor: pointer;
  }
`;
