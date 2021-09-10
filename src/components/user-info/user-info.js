import React from 'react';
import {
  StyledUserInfo, UserAvatar, AuthorLink, PublicationDate,
} from './styled-user-info';

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

export default UserInfo;
