import React from 'react';
import ListErrors from '../../list-errors/list-errors';
import InputComponent from '../input/Input';
import Textarea from '../textarea/Textarea';
import { StyledFieldset } from './styled-fieldset';

const Fieldset = (props) => {
  const {
    fieldName, fieldValue, handleInputChange, passwordField,
    type, placeholder, isTextarea, includesLoader,
  } = props;

  return (
    <StyledFieldset>
      <p>{fieldName}</p>
      { !isTextarea ? (
        <InputComponent
          includesLoader={includesLoader}
          passwordField={passwordField}
          type={type}
          placeholder={placeholder}
          value={fieldValue}
          onChange={handleInputChange}
        />
      )
        : (
          <Textarea
            placeholder={placeholder}
            value={fieldValue}
            onChange={handleInputChange}
            type={type}
          />
        )}
      <ListErrors errors={props.errors} />
    </StyledFieldset>
  );
};

export default Fieldset;
