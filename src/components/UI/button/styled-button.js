import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => (!props.secondary ? 'rgba(235, 235, 235, 1)' : '#ff0000')};
  font-family: "Consolas";
  font-weight: 700;
  text-align: center;
  background-color: ${(props) => (!props.secondary ? '#ff0000' : 'transparent')};
  border: 1.5px solid ${(props) => (!props.secondary ? 'rgba(235, 235, 235, 1)' : '#ff0000')};
  border-radius: 2px;
  padding: 0 16px 0 16px;
  margin: ${(props) => (props.withoutMargin ? '0' : '40px 0 32px 0')};
  align-self: flex-end;
  transition: opacity 0.5s linear;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
