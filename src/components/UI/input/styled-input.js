import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 540px;
  height: 40px;
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
export const Icon = styled.img`
  position: absolute;
  top: 37px;
  right: 16px;
  z-index: 50;
  cursor: pointer;
`;
export const ErrorImage = styled.img`
  position: absolute;
  top: 37px;
  right: 16px;
  z-index: 50;
`;
