import ArticleActions from "./ArticleActions";
import React from "react";
import styled from "styled-components";
import UserInfo from "../UserInfo";
import Like from "../Like";

const ArticleMeta = (props) => {
  const article = props.article;

  return (
    <StyledArticleMeta>
      <UserInfo article={article}/>
      {!props.canModify && <Like article={article} />}
      <ArticleActions canModify={props.canModify} article={article} />
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
