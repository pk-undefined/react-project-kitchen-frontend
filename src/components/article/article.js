import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleMeta from '../article-meta/article-meta';
import CommentContainer from '../comment-container/comment-container';
import {
  StyledArticle, StyledSubtitle, TagItem, TagList,
} from './styled-article';
import Post from '../post/post';
import { requestArticleGet, requestArticleForArticle } from '../../store/articleSlice';

const Article = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentArticle = history.location.pathname.slice(9);

  useEffect(() => {
    dispatch(requestArticleGet(currentArticle));
    dispatch(requestArticleForArticle(currentArticle));
  }, [dispatch]);

  const currentUser = useSelector((state) => state.auth.user);
  const { article, comments } = useSelector((state) => state.article.article);

  // Бывает вылетает баг что нет свойства, хз что за фигня
  // Возможно что хук срабатывает позже чет загружается страница, но такого быть не должно
  const {
    author, tagList,
  } = article;

  const currentUserUsername = currentUser?.username;
  const authorUsername = author?.username;

  const canModify = currentUser && currentUserUsername === authorUsername;
  const isArticle = Object.keys(article).length > 0;

  return (
    isArticle && (
      <StyledArticle>
        <ArticleMeta article={article} canModify={canModify} />
        <Post article={article} />

        {tagList && tagList.length && <StyledSubtitle>Тэги:</StyledSubtitle>}
        <TagList>
          {
                tagList?.map((tag) => (
                  <TagItem
                    key={tag}
                  >
                    {tag}
                  </TagItem>
                ))
              }
        </TagList>

        <CommentContainer
          comments={comments}
            // errors={commentErrors}
          slug={currentArticle}
          currentUser={currentUser}
        />
      </StyledArticle>
    )
  );
};

export default Article;
