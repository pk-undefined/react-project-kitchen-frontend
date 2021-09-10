import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-secondary);
`;

export const StyledContainer = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-default);
  font-size: 16px;
  line-height: 28px;
  font-family: 'Press Start 2P';
`;

export const StyledNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${(props) => (props.active ? 'var(--color-default)' : 'var(--color-inactive)')};

  :hover {
    color: var(--color-default);
  }

  .avatar {
    margin-right: 8px;
  }

  .navIcon {
    margin-right: 8px;
  }
`;
