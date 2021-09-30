import React from 'react';
import { useDispatch } from 'react-redux';
import icons from '../icons/icons';
import { StyledDeleteButton } from './styled-delete-button';
import { requestArticleDeleteComment, delComment } from '../../../store/articleSlice';

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  const { DeleteIcon } = icons;
  const { slug, commentId, show } = props;
  const del = () => {
    dispatch(requestArticleDeleteComment({ slug, commentId }));
    dispatch(delComment(commentId));
  };

  if (show) {
    return (
      <StyledDeleteButton onClick={del}>
        <DeleteIcon />
      </StyledDeleteButton>
    );
  }
  return null;
};

export default DeleteButton;
