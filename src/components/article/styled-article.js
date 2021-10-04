import styled from 'styled-components';

export const StyledArticle = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1108px;
  padding: 32px 0 0 0;
`;

export const StyledSubtitle = styled.h4`
  color: var(--color-accent);
  padding: 0;
  margin: 20px 0 10px;
`;

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 340px;
  column-gap: 12px;
  flex-wrap: wrap;
`;

export const TagItem = styled.li`
  font-size: 12px;
`;
