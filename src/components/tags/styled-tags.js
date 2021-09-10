import styled from 'styled-components';

export const TagsTitle = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-family: Consolas, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const Tag = styled.a`
  padding: 4px 8px;
  background: ${(props) => (props.active ? 'var(--color-accent)' : '#292929')};
  border-radius: 2px;
  font-size: 14px;
  line-height: 16px;
  margin: 4px;
`;
