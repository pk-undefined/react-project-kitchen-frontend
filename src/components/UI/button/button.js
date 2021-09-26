import React from 'react';
import { Button } from './styled-button';

const ButtonComponent = (props) => (
  <Button
    type={props.type}
    disabled={props.disabled}
    withoutMargin={props.withoutMargin}
    secondary={props.secondary}
  >
    {props.children}
  </Button>
);

export default ButtonComponent;
