import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { requestArticleDeleted } from '../../store/articleSlice';
import { Button } from '../UI/button/styled-button';
import icons from '../UI/icons/icons';
import { StyledActions, ButtonText } from './styled-article-actions';

const ArticleActions = (props) => {
  const dispatch = useDispatch();
  const { article } = props;
  const { EditIcon, DeleteIcon } = icons;
  const del = () => {
    dispatch(requestArticleDeleted(article.slug));
  };
  if (props.canModify) {
    return (
      <StyledActions>
        <Link
          to={`/editor/${article.slug}`}
        >
          <Button type="button" withoutMargin>
            <EditIcon />
            <ButtonText>Редактировать запись</ButtonText>
          </Button>
        </Link>

        <Button type="button" onClick={del} withoutMargin secondary>
          <DeleteIcon />
          <ButtonText>Удалить запись</ButtonText>
        </Button>
      </StyledActions>
    );
  }

  return (
    <span />
  );
};

export default ArticleActions;
