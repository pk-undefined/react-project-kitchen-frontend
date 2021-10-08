import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Textarea from '../UI/textarea/textarea';
import UserInfo from '../user-info/user-info';
import { InfoContainer, StyledCommentForm } from './common/styled-form';
import Button from '../UI/button/button';
import { requestArticleCreateComment } from '../../store/articleSlice';

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
      <Textarea value={body} onChange={handleChange} type="commentForm" placeholder={t('writeAComment')} />
      <InfoContainer>
        <UserInfo article={{ author: currentUser, createdAt: Date.now() }} isNotFullWidth />
        <Button withoutMargin type="submit">{t('sendAComment')}</Button>
      </InfoContainer>
    </StyledCommentForm>
  );
};

export default CommentForm;
