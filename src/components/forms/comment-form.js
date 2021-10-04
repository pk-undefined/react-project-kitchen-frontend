import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Textarea from '../UI/textarea/textarea';
import UserInfo from '../user-info/user-info';
import { InfoContainer, StyledCommentForm } from './common/styled-form';
import Button from '../UI/button/button';
import { requestArticleCreateComment } from '../../store/articleSlice';

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = props;
  const [body, setBody] = useState('');
  const handleChange = (e) => {
    setBody(e.target.value);
  };

  const sendComment = (e) => {
    e.preventDefault();
    setBody('');
    dispatch(requestArticleCreateComment({ slug: props.slug, comment: body }));
  };

  return (
    <StyledCommentForm onSubmit={sendComment}>
      <Textarea value={body} onChange={handleChange} type="commentForm" placeholder="Написать комментарий" />
      <InfoContainer>
        <UserInfo article={{ author: currentUser, createdAt: Date.now() }} isNotFullWidth />
        <Button withoutMargin type="submit">Отправить комментарий</Button>
      </InfoContainer>
    </StyledCommentForm>
  );
};

export default CommentForm;
