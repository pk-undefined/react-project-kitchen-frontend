import React from 'react';
import { StyledTextArea } from './styled-textarea';

const Textarea = (props) => {
  const {
    placeholder, value, onChange, name,
  } = props;
  const error = false;
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
      value={value}
    >
      {value}
    </StyledTextArea>
  );
};

export default Textarea;
