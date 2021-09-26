import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleMeta from '../article-meta/article-meta';
import CommentContainer from '../comment-container/comment-container';
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

  const {
    body,
    author,
    title,
    tagList,
  } = article;

  const currentUserUsername = currentUser?.username;
  const authorUsername = author?.username;

  const canModify = currentUser
    && currentUserUsername === authorUsername;

  const isArticle = Object.keys(article).length > 0;

  return isArticle && (
    <div className="article-page">

      <div className="banner">
        <div className="container">

          <ArticleMeta
            article={article}
            canModify={canModify}
          />

        </div>
      </div>

      <div className="container page">

        <div className="row article-content">
          <div className="col-xs-12">

            <Post body={body} title={title} />

            <ul className="tag-list">
              {
                tagList?.map((tag) => (
                  <li
                    className="tag-default tag-pill tag-outline"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))
              }
            </ul>

          </div>
        </div>

        <hr />

        <div className="article-actions" />

        <div className="row">
          <CommentContainer
            comments={comments}
            // errors={commentErrors}
            slug={currentArticle}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
