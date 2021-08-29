import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArticleMeta from "./Article/ArticleMeta";
import defaultAvatar from "../images/default-avatar.svg";


const ArticlePreview = (props) => {
  const article = props.article;

  //пока не работает добавление тэгов
  const list = [
    "Tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
    "tag8",
    "tag9",
  ];

  return (
    <StyledArticlePreview>
      <ArticleImage src={article.image ? article.image : defaultAvatar} alt={article.title}/>
      <ArticleMeta article={article} canModify={false} />
      <ArticleLink to={`/article/${article.slug}`}>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleText>{article.description}</ArticleText>
        <Text>Read more</Text>
        <TagList>
          {list.map((tag, index) => {
            return <Tag key={tag + index}>{tag}</Tag>;
          })}
        </TagList>
      </ArticleLink>
    </StyledArticlePreview>
  );
};

const StyledArticlePreview = styled.article`
  background: #0a0a0a;
  width: 100%;
  max-width: 808px;
  min-height: 320px;
  box-sizing: border-box;
  padding: 32px 0;
  display: grid;
  grid-template-columns: 160px 1fr;
  column-gap: 16px;
  box-shadow: inset 0px -1px 0px #1F1F1F;
`;

const ArticleImage = styled.img`
  width: 160px;
  height: 228px;
  object-fit: contain;
  object-position: center;
  grid-column: 1;
  grid-row: 1/5;
  background: #292929;
`;

const ArticleTitle = styled.h3`
  font-family: "Press Start 2P", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.75;
  color: #ebebeb;
  margin: 16px 0 8px;
  padding: 0;
  grid-column: 1/3;
`;

const Text = styled.p`
  font-family: "Consolas", Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  color: #ff0000;
  text-decoration: underline;
  grid-column: 1;
`;

const ArticleText = styled(Text)`
  height: 96px;
  width: 632px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #b8b8b8;
  text-decoration: none;
  margin: 0 0 16px 0;
  grid-column: 1/3;
`;

const ArticleLink = styled(Link)`
  display: grid;
  grid-template-colums: 176px 1fr;
  transition: opacity 0.5s linear;
  &:hover{
    opacity: 0.7;
    cursor: pointer;
    text-decoration:none;
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 456px;
  list-style: none;
  padding: 0;
  grid-row: 3/5;
  grid-column: 2;
  justify-self: flex-end;
`;

const Tag = styled.li`
  padding: 4px 8px;
  box-sizing: border-box;
  font-family: "Consolas", Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 1.1;
  color: #ebebeb;
  margin: 0 0 4px 4px;
  background: #292929;
`;

export default ArticlePreview;
