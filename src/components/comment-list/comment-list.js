import React from 'react';
import Comment from '../comment/comment';

const CommentList = (props) => (
  <div>
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
  </div>
);

export default CommentList;
