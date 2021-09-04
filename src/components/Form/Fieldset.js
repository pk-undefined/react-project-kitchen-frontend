import React from 'react';
import styled from 'styled-components';
import ListErrors from '../ListErrors';
import InputComponent from './Input';
import Textarea from './Textarea';

const Fieldset = (props) => {
  const {
    fieldName, fieldValue, handleInputChange, passwordField, type,
  } = props;

  return (
    <StyledFieldset>
      <p>{fieldName}</p>
      { type === 'input' ? (
        <InputComponent
          passwordField={passwordField}
          type={`${fieldValue}`}
          placeholder={fieldName}
          value={fieldValue}
          onChange={handleInputChange}
        />
      )
        : (
          <Textarea
            placeholder={fieldName}
            value={fieldValue}
            onChange={handleInputChange}
            type={type}
          />
        )}
      <ListErrors errors={props.errors} />
    </StyledFieldset>
  );
};

const StyledFieldset = styled.fieldset`
  width: 100%;
  position: relative;
  margin: 12px 0 0 0;
  p{
    height: 24px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    font-family: 'Consolas', Arial, sans-serif;
    color: 'ebebeb';
    margin: 0px;
    padding: 0;
  }
`;

export default Fieldset;
