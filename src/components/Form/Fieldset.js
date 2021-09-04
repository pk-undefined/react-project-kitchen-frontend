import React from 'react';
import styled from 'styled-components';
import ListErrors from '../ListErrors';
import InputComponent from './Input';

const Fieldset = (props) => {
  const {
    fieldName, fieldValue, handleInputChange, passwordField,
  } = props;

  return (
    <StyledFieldset>
      <p>{fieldName}</p>
      <InputComponent
        passwordField={passwordField}
        type={`${fieldValue}`}
        placeholder={fieldName}
        value={fieldValue}
        onChange={handleInputChange}
      />
      <ListErrors errors={props.errors} />
    </StyledFieldset>
  );
};

const StyledFieldset = styled.fieldset`
  width: 100%;
  position: relative;
  margin-top: 12px;
  p{
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Consolas';
    color: rgba(235, 235, 235, 1);
    margin: 0px;
  }
`;

export default Fieldset;
