import ArticleActions from "./ArticleActions";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import like from "../../images/like.svg";
import likeActive from "../../images/like-active.svg";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
} from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  favorite: (slug) =>
    dispatch({
      type: ARTICLE_FAVORITED,
      payload: agent.Articles.favorite(slug),
    }),
  unfavorite: (slug) =>
    dispatch({
      type: ARTICLE_UNFAVORITED,
      payload: agent.Articles.unfavorite(slug),
    }),
});

const ArticleMeta = (props) => {
  const article = props.article;

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("click");
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };
  return (
    <StyledArticleMeta>
      <UserAvatar
        to={`/@${article.author.username}`}
        avatar={article.author.image}
      />
      <AuthorLink className="author" to={`/@${article.author.username}`}>
        {article.author.username}
      </AuthorLink>
      <PublicationDate>
        {new Date(article.createdAt).toDateString()}
      </PublicationDate>
      <Counter count={article.favoritesCount} article={article}>
        {article.favoritesCount}
      </Counter>
      {!props.canModify && (
        <LikeButton onClick={handleClick} article={article} type="button" />
      )}
      <ArticleActions canModify={props.canModify} article={article} />
    </StyledArticleMeta>
  );
};

const StyledArticleMeta = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-columns: min-content 1fr min-content min-content;
  grid-template-rows: repeat(2, min-content);
  column-gap: 8px;
  align-items: center;
`;

const UserAvatar = styled(Link)`
  width: 40px;
  height: 40px;
  grid-column: 1;
  grid-row: 1/3;
  background: center/cover
    url(${(props) => props.avatar}) no-repeat;
  transition: opacity 0.5s linear;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const AuthorLink = styled(Link)`
  font-family: "Consolas", Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
  color: #ebebeb;
  grid-column: 2;
  grid-row: 1;
  transition: opacity 0.5s linear;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const PublicationDate = styled.span`
  font-family: "Consolas", Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 1.1;
  color: #b8b8b8;
  grid-column: 2;
  grid-row: 2;
`;

const Counter = styled.p`
  grid-column: 3;
  grid-row: 1/3;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 450;
  margin: 0;
  padding: 0;
  display: ${(props) => (props.count > 0 ? "block" : "none")};
  color: ${(props) => (props.article.favorited ? "#ff0000" : "#f3f3f3")};
`;

const LikeButton = styled.button`
  grid-column: 4;
  grid-row: 1/3;
  width: 20px;
  height: 18px;
  box-shadow: none;
  border: none;
  background: center/contain
    ${(props) =>
      props.article.favorited ? `url(${likeActive})` : `url(${like})`}
    no-repeat transparent;
  transition: opacity 0.5s linear;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default connect(() => ({}), mapDispatchToProps)(ArticleMeta);
