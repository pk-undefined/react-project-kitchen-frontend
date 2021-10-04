import React from 'react';
// import CommentInput from '../CommentInput';
import { StyledCommentContainer, Title } from './styled-comment-container';
import CommentList from '../comment-list/comment-list';
import CommentForm from '../forms/comment-form';

const CommentContainer = (props) => (
  <StyledCommentContainer>
    <Title>Комментарии</Title>
    {props.currentUser && (
    // <div>
    //   <list-errors errors={props.errors} />
    //   <CommentInput slug={props.slug} currentUser={props.currentUser} />
    // </div>
    <CommentForm
      currentUser={props.currentUser}
      slug={props.slug}
    />
    )}

    <CommentList
      comments={props.comments}
      slug={props.slug}
      currentUser={props.currentUser}
    />
  </StyledCommentContainer>
);

export default CommentContainer;
