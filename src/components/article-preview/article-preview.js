import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticleMeta from '../article-meta/article-meta';
import defaultAvatar from '../../images/default-avatar.svg';
import {
  StyledArticlePreview,
  ArticleImage,
  ArticleLink,
  ArticleTitle,
  ArticleText,
  Text,
  TagList,
  Tag,
} from './styled-article-preview';

const ArticlePreview = (props) => {
  const { t } = useTranslation();
  const { article } = props;

  return (
    <StyledArticlePreview>
      <ArticleImage
        src={article.image ? article.image : defaultAvatar}
        alt={article.title}
      />
      <ArticleMeta article={article} canModify={false} />
      <ArticleLink to={`/article/${article.slug}`}>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleText>{article.description}</ArticleText>
        <Text>{t('readMore')}</Text>
        <TagList>
          {article.tagList.map((tag, index) => (
            <Tag key={tag + index}>{tag}</Tag>
          ))}
        </TagList>
      </ArticleLink>
    </StyledArticlePreview>
  );
};

export default ArticlePreview;
