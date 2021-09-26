import React from 'react';
import styled from 'styled-components';

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

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 136px;
  font-size: 16px;
  line-height: 40px;
  color: rgba(184, 184, 184, 1);
  font-family: 'Consolas';
  font-weight: 700;
  padding: 0 16px;
  background-color: rgba(41, 41, 41, 1);
  border: 0;
  border-radius: 2px;
  margin-top: 4px;
  border: ${(props) => (props.error ? '1px solid red' : '')}; 
`;

export default Textarea;
