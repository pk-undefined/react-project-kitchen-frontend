import React from 'react';
import ArticleActions from '../article-actions/article-actions';
import UserInfo from '../user-info/user-info';
import Like from '../UI/like/like';
import { StyledArticleMeta } from './styled-article-meta';

const ArticleMeta = (props) => {
  const { article, canModify, isComment } = props;

  return (
    <StyledArticleMeta>
      <UserInfo article={article} />
      {!canModify && !isComment && <Like article={article} />}
      <ArticleActions canModify={canModify} article={article} />
    </StyledArticleMeta>
  );
};

export default ArticleMeta;
