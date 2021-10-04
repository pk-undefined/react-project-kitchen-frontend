import styled from 'styled-components';

export const StyledListPagination = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 32px auto;
  width: 320px;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width:64px;
  height: 48px;
  border: 1px solid var(--bg-color-secondary);
  background: ${(props) => (props.isActive ? '#ff0000' : '#0A0A0A')};
`;
