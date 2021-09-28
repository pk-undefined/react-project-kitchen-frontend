import React from 'react';
import ListErrors from '../../list-errors/list-errors';
import InputComponent from '../input/input';
import Textarea from '../textarea/textarea';
import { StyledFieldset } from './styled-fieldset';

const Fieldset = (props) => {
  const {
    fieldName, fieldValue, handleInputChange, passwordField,
    type, placeholder, isTextarea, includesLoader,
  } = props;

  return (
    <StyledFieldset>
      <p>{placeholder}</p>
      { !isTextarea ? (
        <InputComponent
          includesLoader={includesLoader}
          passwordField={passwordField}
          type={type}
          placeholder={placeholder}
          value={fieldValue}
          name={fieldName}
          onChange={handleInputChange}
        />
      )
        : (
          <Textarea
            placeholder={placeholder}
            value={fieldValue}
            name={fieldName}
            onChange={handleInputChange}
          />
        )}
      <ListErrors errors={props.errors} />
    </StyledFieldset>
  );
};

export default Fieldset;
