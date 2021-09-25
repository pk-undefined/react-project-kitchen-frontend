import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: ${(props) => (props.name === 'commentForm' ? '120px' : '136px')};
  font-size: 16px;
  line-height: 40px;
  color: rgba(184, 184, 184, 1);
  font-family: 'Consolas';
  font-weight: 700;
  padding: ${(props) => (props.name === 'commentForm' ? '24px 24px 0' : '0 16px')};
  background-color: rgba(41, 41, 41, 1);
  border: 0;
  border-radius: 2px;
  margin-top: ${(props) => (props.name === 'commentForm' ? '0' : '4px')};
  box-sizing: border-box;
  border: ${(props) => (props.error ? '1px solid red' : '')}; 
`;
