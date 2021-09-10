import React from 'react';
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
  const { article } = props;

  // TODO: удалить когда починим добавление тэгов
  const list = [
    'Tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag6',
    'tag7',
    'tag8',
    'tag9',
  ];

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
        <Text>Read more</Text>
        <TagList>
          {list.map((tag, index) => (
            <Tag key={tag + index}>{tag}</Tag>
          ))}
        </TagList>
      </ArticleLink>
    </StyledArticlePreview>
  );
};

export default ArticlePreview;
