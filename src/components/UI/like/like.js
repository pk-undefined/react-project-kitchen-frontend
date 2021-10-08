import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import like from '../../../images/like.svg';
import likeActive from '../../../images/like-active.svg';
import {
  requestArticleFavorite,
  requestArticleUnfavorite,
} from '../../../store/articleSlice';

const Like = (props) => {
  const dispatch = useDispatch();
  const { article } = props;
  const history = useHistory();
  const { user } = useSelector((store) => store.auth);

  const handleClick = (ev) => {
    ev.preventDefault();
    if (!user.username) {
      history.replace({ pathname: '/login' });
    } else if (article.favorited) {
      dispatch(requestArticleUnfavorite(article.slug));
    } else {
      dispatch(requestArticleFavorite(article.slug));
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

const StyledLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Counter = styled.p`
  grid-column: 3;
  grid-row: 1/3;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 450;
  margin: 0 9px 0 0;
  padding: 0;
  display: ${(props) => (props.count > 0 ? 'block' : 'none')};
  color: ${(props) => (props.article.favorited ? '#ff0000' : '#f3f3f3')};
`;

const LikeButton = styled.button`
  grid-column: 4;
  grid-row: 1/3;
  width: 20px;
  height: 18px;
  box-shadow: none;
  border: none;
  background: center/contain
    ${(props) => (props.article.favorited ? `url(${likeActive})` : `url(${like})`)}
    no-repeat transparent;
  transition: opacity 0.5s linear;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default Like;
