import styled from 'styled-components';

export const UserAvatar = styled.div`
  width: 24px;
  height: 24px;
  grid-column: 1;
  grid-row: 1/3;
  margin-right: 5px;
  background: center/40px 40px url(${(props) => (props.avatar ? props.avatar : props.defaultImage)}) no-repeat;
  transition: opacity 0.5s linear;
  background-size: cover;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
