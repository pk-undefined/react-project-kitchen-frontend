import React from 'react';
import { StyledTab } from './styled-tab';

const Tab = ({ children, ...rest }) => (
  <StyledTab {...rest}>
    {children}
  </StyledTab>
);

export default Tab;
