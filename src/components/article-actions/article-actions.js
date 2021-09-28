import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { requestArticleDeleted } from '../../store/articleSlice';

const ArticleActions = (props) => {
  const dispatch = useDispatch();
  const { article } = props;
  const del = () => {
    dispatch(requestArticleDeleted(article.slug));
  };

  if (props.canModify) {
    return (
      <span>

        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm"
        >
          <i className="ion-edit" />
          {' '}
          Редактировать
        </Link>

        <button type="button" className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a" />
          {' '}
          Удалить
        </button>

      </span>
    );
  }

  return (
    <span />
  );
};

export default ArticleActions;
