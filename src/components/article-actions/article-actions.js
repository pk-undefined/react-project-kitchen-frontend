import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { DELETE_ARTICLE } from '../../constants/actionTypes';
import { Button } from '../UI/button/styled-button';
import icons from '../UI/icons/icons';
import { StyledActions, ButtonText } from './styled-article-actions';

const mapDispatchToProps = (dispatch) => ({
  onClickDelete: (payload) => dispatch({ type: DELETE_ARTICLE, payload }),
});

const ArticleActions = (props) => {
  const { article } = props;
  const { EditIcon, DeleteIcon } = icons;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug));
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

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
