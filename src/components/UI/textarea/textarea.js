import React from 'react';
import { StyledTextArea } from './styled-textarea';

const Textarea = (props) => {
  const {
    type, placeholder, value, onChange,
  } = props;
  const error = false;
  return (
    <StyledTextArea
      name={type}
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
