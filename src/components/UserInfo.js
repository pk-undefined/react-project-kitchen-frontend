import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserInfo = ({ article }) => (
  <StyledUserInfo>
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
  </StyledUserInfo>
);

const StyledUserInfo = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content min-content;
  grid-template-rows: repeat(2, min-content);
  column-gap: 8px;
  align-items: center;
  width: 100%;
`;

const UserAvatar = styled(Link)`
  width: 40px;
  height: 40px;
  grid-column: 1;
  grid-row: 1/3;
  background: center/cover url(${(props) => props.avatar}) no-repeat;
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

export default UserInfo;
