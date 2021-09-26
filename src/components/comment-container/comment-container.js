import React from 'react';
// import CommentInput from '../CommentInput';
import { StyledCommentContainer, Title } from './styled-comment-container';
import CommentList from '../comment-list/comment-list';
import CommentForm from '../forms/comment-form';

const CommentContainer = (props) => {
  const commentsTemp = [
    {
      author: {
        bio: 'lkjkjmds',
        following: false,
        image:
          'https://images.unsplash.com/photo-1630673460627-84fa90056599?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        username: 'anna',
      },
      body: 'first comment',
      article: { slug: 'new-name-45n70l' },
      createdAt: Date.now(),
    },
    {
      author: {
        bio: 'lkjkjmds',
        following: false,
        image:
          'https://images.unsplash.com/photo-1630673460627-84fa90056599?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        username: 'anna',
      },
      body: 'second comment',
      article: { slug: 'new-name-45n70l' },
      createdAt: Date.now(),
    },
  ];

  return (
    <StyledCommentContainer>
      <Title>Комментарии</Title>
      {props.currentUser && (
      // <div>
      //   <list-errors errors={props.errors} />
      //   <CommentInput slug={props.slug} currentUser={props.currentUser} />
      // </div>
      <CommentForm currentUser={props.currentUser} />
      )}

      <CommentList
        comments={props.comments.length > 0 ? props.comments : commentsTemp}
        slug={props.slug}
        currentUser={props.currentUser}
      />
    </StyledCommentContainer>
  );
};

export default CommentContainer;
