import styled, { css } from 'styled-components';

export const TabsList = styled.ul`
  display: flex;
  box-shadow: inset 0 -1px 0 #1f1f1f;
`;

export const Tab = styled.a`
  padding: 16px 24px;
  color: var(--color-inactive);
  display: block;
  font-weight: bold;

  ${(props) => props.active
    && css`
      color: var(--color-default);
      box-shadow: inset 0 -2px 0 var(--color-accent);
    `}
`;
