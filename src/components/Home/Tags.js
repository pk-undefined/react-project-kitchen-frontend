import React from 'react';
import styled from 'styled-components';
import agent from '../../agent';

const TagsTitle = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-family: Consolas, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 16px;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Tag = styled.a`
  padding: 4px 8px;
  background: ${(props) => (props.active ? 'var(--color-accent)' : '#292929')};
  border-radius: 2px;
  font-size: 14px;
  line-height: 16px;
  margin: 4px;
`;

const tags = ['Tag', 'tag', 'TAG', 'React', 'css', 'Redux'];

const Tags = ({ activeTag, onClickTag }) => (
  <>
    <TagsTitle>Популярные теги</TagsTitle>
    <TagsList>
      {tags
        ? tags.map((tag) => {
          const handleClick = (ev) => {
            ev.preventDefault();
            onClickTag(
              tag,
              (page) => agent.Articles.byTag(tag, page),
              agent.Articles.byTag(tag),
            );
          };

          return (
            <Tag href="" active={tag === activeTag} key={tag} onClick={handleClick}>
              {tag}
            </Tag>
          );
        })
        : 'Loading Tags...'}
    </TagsList>
  </>
);

export default Tags;
