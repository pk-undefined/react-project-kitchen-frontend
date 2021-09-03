import React, { useEffect, Suspence } from 'react';
import { connect } from 'react-redux';
import ArticleMeta from './ArticleMeta';
import CommentContainer from './CommentContainer';
import agent from '../../agent';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';
import Post from './Post';

const mapStateToProps = (state) => ({
  ...state.article,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => console.log(dispatch({ type: ARTICLE_PAGE_LOADED, payload })),
  onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED }),
});

const Article = (props) => {
  const {
    onLoad, onUnload, match, article = { kek: 'anus' }, currentUser = {}, comments = [], commentErrors,
  } = props;

  const {
    body,
    author = {},
    title,
    tagList = [],
  } = article;

  const { id: matchId } = match.params;
  const currentUserUsername = currentUser?.username;
  const authorUsername = author?.username;
  // const { Articles, Comments } = agent;

  useEffect(() => {
    onLoad(Promise.all([
      agent.Articles.get(props.match.params.id),
      agent.Comments.forArticle(props.match.params.id),
    ]));

    return () => onUnload();
  }, []);

  const canModify = currentUser
    && currentUserUsername === authorUsername;

  return article && (
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
            errors={commentErrors}
            slug={matchId}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
