import React from 'react';
import styled from 'styled-components';
import agent from '../../agent';

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const Tag = styled.a`
  padding: 4px 8px;
  background: #292929;
  border-radius: 2px;
  font-size: 14px;
  line-height: 16px;
  margin: 4px;
`;

const tags = ['Tag', 'tag', 'TAG', 'React', 'Tag', 'tag', 'TAG'];

const Tags = ({ onClickTag }) => {
  return (
    <TagsList>
      {tags
        ? tags.map((tag) => {
            const handleClick = (ev) => {
              ev.preventDefault();
              onClickTag(
                tag,
                (page) => agent.Articles.byTag(tag, page),
                agent.Articles.byTag(tag)
              );
            };

            return (
              <Tag href='' key={tag} onClick={handleClick}>
                {tag}
              </Tag>
            );
          })
        : 'Loading Tags...'}
    </TagsList>
  );
};

export default Tags;
