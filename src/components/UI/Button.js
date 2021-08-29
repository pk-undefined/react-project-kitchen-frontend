import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1.5px solid;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  background: var(--color-accent);
  border-color: var(--color-default);
  color: var(--color-default);

  .btnIcon {
    margin-right: 8px;
  }

  ${(props) =>
    props.outlined &&
    css`
      color: var(--color-accent);
      border-color: var(--color-accent);
      background: transparent;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
