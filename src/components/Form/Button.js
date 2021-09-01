import styled from 'styled-components';
import React from 'react';

const ButtonComponent = (props) => (
  <Button
    type={props.type}
    disabled={props.disabled}
  >
    {props.children}
  </Button>
);

export default ButtonComponent;

const Button = styled.button`
height: 40px;
font-size: 16px;
line-height: 40px;
color: rgba(235, 235, 235, 1);
font-family: 'Consolas';
font-weight: 700;
text-align: center;
background-color: #FF0000;
border: 1.5px solid rgba(235, 235, 235, 1);
border-radius: 2px;
padding: 0 16px 0 16px;
margin: 40px 0 32px 0;
float: right;
`;
