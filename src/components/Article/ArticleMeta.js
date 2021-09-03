import React from 'react';
import styled from 'styled-components';
import ArticleActions from './ArticleActions';
import UserInfo from '../UserInfo';
import Like from '../Like';

const ArticleMeta = (props) => {
  const { article, canModify } = props;

  return (
    <StyledArticleMeta>
      <UserInfo article={article} />
      {!canModify && <Like article={article} />}
      <ArticleActions canModify={canModify} article={article} />
    </StyledArticleMeta>
  );
};

const StyledArticleMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ArticleMeta;
