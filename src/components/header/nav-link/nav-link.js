import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { StyledLink } from '../styled-header';

export const NavLink = (props) => {
  const match = useRouteMatch({
    path: props.to,
    strict: true,
    exact: true,
    sensitive: true,
  });

  const activeStile = { color: 'var(--color-default)' };

  return (
    <li>
      <StyledLink {...props} style={match ? activeStile : undefined}>
        {props.children}
      </StyledLink>
    </li>
  );
};
