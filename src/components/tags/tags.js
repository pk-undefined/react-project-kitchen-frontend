import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TagsTitle, TagsList, Tag } from './styled-tags';
import {
  setTag,
  requestArticleGetAllTags,
} from '../../store/articleSlice';

const Tags = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.article.articleList);
  const activeTag = useSelector((state) => state.article.articleList.tag);

  useEffect(() => {
    dispatch(requestArticleGetAllTags());
  }, []);

  const onClickTag = (tag) => {
    dispatch(setTag(tag));
  };

  return (
    <>
      <TagsTitle>{t('popularTags')}</TagsTitle>
      <TagsList>
        {tags
          ? tags.map((tag) => {
            const handleClick = (ev) => {
              ev.preventDefault();
              onClickTag(tag);
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
};

export default Tags;
