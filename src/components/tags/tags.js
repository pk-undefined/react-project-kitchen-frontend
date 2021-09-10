import React from 'react';
import agent from '../../agent';
import { TagsTitle, TagsList, Tag } from './styled-tags';

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
