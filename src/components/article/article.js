import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArticleMeta from '../article-meta/article-meta';
import CommentContainer from '../comment-container/comment-container';
import {
  LoadingText,
  StyledArticle, StyledSubtitle, TagItem, TagList,
} from './styled-article';
import Post from '../post/post';
import { requestArticleGet, requestArticleForArticle } from '../../store/articleSlice';

const Article = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentArticle = history.location.pathname.slice(9);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(requestArticleGet(currentArticle));
    dispatch(requestArticleForArticle(currentArticle));
  }, [dispatch]);

  const currentUser = useSelector((state) => state.auth.user);
  const { article, comments } = useSelector((state) => state.article.article);

  return (
    article && Object.keys(article).length > 0 ? (
      <StyledArticle>
        <ArticleMeta
          article={article}
          canModify={currentUser && currentUser.username === article.author?.username}
        />
        <Post article={article} />

        {article.tagList && article.tagList.length && <StyledSubtitle>{t('tags')}</StyledSubtitle>}
        <TagList>
          {
                article.tagList?.map((tag) => (
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
    ) : (
      <LoadingText>{t('loadingText')}</LoadingText>
    )
  );
};

export default Article;
