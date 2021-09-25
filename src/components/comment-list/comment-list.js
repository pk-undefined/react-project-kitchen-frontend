import React from 'react';
import Comment from '../comment/comment';
import { StyledCommentList } from './styled-comment-list';

const CommentList = (props) => (
  <StyledCommentList>
    {
        props.comments.map((comment) => (
          <Comment
            comment={comment}
            currentUser={props.currentUser}
            slug={props.slug}
            key={comment.id}
          />
        ))
      }
  </StyledCommentList>
);

export default CommentList;
