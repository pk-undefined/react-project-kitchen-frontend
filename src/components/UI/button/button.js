import React from 'react';
import { Button } from './styled-button';

const ButtonComponent = (props) => (
  <Button type={props.type} disabled={props.disabled}>
    {props.children}
  </Button>
);

export default ButtonComponent;
