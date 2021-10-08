import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledTab = styled(Link)`
  padding: 16px 24px;
  color: var(--color-inactive);
  display: block;
  font-weight: bold;
  ${(props) => props.active === 'true'
    && css`
      color: var(--color-default);
      box-shadow: inset 0 -2px 0 var(--color-accent);
    `}
`;
