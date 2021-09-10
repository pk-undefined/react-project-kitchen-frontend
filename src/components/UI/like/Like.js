import React from 'react';
import { connect } from 'react-redux';
import agent from '../../../agent';
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
} from '../../../constants/actionTypes';
import { LikeButton, StyledLike, Counter } from './styled-like';

const mapDispatchToProps = (dispatch) => ({
  favorite: (slug) => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug),
  }),
  unfavorite: (slug) => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug),
  }),
});

const Like = (props) => {
  const { article } = props;
  const handleClick = (ev) => {
    ev.preventDefault();
    console.log('click');
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <StyledLike>
      <Counter count={article.favoritesCount} article={article}>
        {article.favoritesCount}
      </Counter>
      <LikeButton onClick={handleClick} article={article} type="button" />
    </StyledLike>
  );
};

export default connect(() => ({}), mapDispatchToProps)(Like);
