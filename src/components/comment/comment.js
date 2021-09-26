import React from 'react';
import ArticleMeta from '../article-meta/article-meta';
import { CommentText, InfoContainer, StyledComment } from './styled-comment';
import DeleteButton from '../UI/delete-button/delete-button';

const Comment = (props) => {
  const { comment } = props;
  const show = props.currentUser
    && props.currentUser.username === comment.author.username;
  return (
    <StyledComment>
      <CommentText>{comment.body}</CommentText>
      <InfoContainer>
        <ArticleMeta article={comment} canModify={false} isComment />
        <DeleteButton show={show} slug={props.slug} commentId={comment.id} />
      </InfoContainer>
    </StyledComment>
  );
};

export default Comment;
