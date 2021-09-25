import styled from 'styled-components';

export const StyledComment = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 728px;
  background: var(--bg-color-secondary);
  padding: 24px;
  box-sizing: border-box;
  margin: 0 0 32px 0;
  align-self: center;
`;

export const CommentText = styled.p`
  padding: 0;
  margin: 0 0 24px 0;
  color: var(--color-inactive);
  font-family: 'Consolas', Arial, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
