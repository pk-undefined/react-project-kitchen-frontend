import React from 'react';
import {
  StyledUserInfo, UserAvatar, AuthorLink, PublicationDate, Avatar,
} from './styled-user-info';
import { useLocalizeFormatDate } from '../../i18n/hooks/use-localize-format-date';

const UserInfo = ({ article, isNotFullWidth }) => {
  const localizeDate = useLocalizeFormatDate(article.createdAt);

  return (
    <StyledUserInfo isNotFullWidth={isNotFullWidth}>
      <UserAvatar
        to={`/@${article.author.username}`}
      >
        <Avatar src={article.author.image} alt={article.author.username} />
      </UserAvatar>
      <AuthorLink className="author" to={`/@${article.author.username}`}>
        {article.author.username}
      </AuthorLink>
      <PublicationDate>
        {localizeDate}
      </PublicationDate>
    </StyledUserInfo>
  );
};

export default UserInfo;
