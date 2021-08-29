import React from 'react';
import styled from 'styled-components';
import agent from '../../agent';

const StyledTagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const StyledTag = styled.a`
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
    <StyledTagsList>
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
              <StyledTag href='' key={tag} onClick={handleClick}>
                {tag}
              </StyledTag>
            );
          })
        : 'Loading Tags...'}
    </StyledTagsList>
  );
};

export default Tags;
