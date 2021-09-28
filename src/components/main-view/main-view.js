import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../article-list/article-list';
import { Tab, TabsList } from './styled-main-view';
import {
  setTab,
  setTag,
  requestArticleAllPage,
  requestArticleFeed,
  requestArticleByTag,
} from '../../store/articleSlice';

const YourFeedTab = (props) => {
  const dispatch = useDispatch();
  if (props.token) {
    const clickHandler = (ev) => {
      ev.preventDefault();
      dispatch(setTab('feed'));
      dispatch(setTag(''));
      dispatch(requestArticleFeed());
    };

    return (
      <li>
        <Tab to="" active={props.tab === 'feed'} onClick={clickHandler}>
          Ваша лента
        </Tab>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = (props) => {
  const dispatch = useDispatch();
  const clickHandler = (ev) => {
    ev.preventDefault();
    dispatch(setTab('all'));
    dispatch(setTag(''));
    dispatch(requestArticleAllPage());
  };
  return (
    <li>
      <Tab to="" active={props.tab === 'all'} onClick={clickHandler}>
        Лента
      </Tab>
    </li>
  );
};

const TagFilterTab = ({ tag }) => {
  const dispatch = useDispatch();
  if (!tag) {
    return null;
  }
  dispatch(setTab(''));
  useEffect(() => {
    dispatch(requestArticleByTag({ tag, page: 0 }));
  }, [dispatch, tag]);

  return (
    <li>
      <Tab to="" active>
        #
        {tag}
      </Tab>
    </li>
  );
};

const MainView = () => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem('Token');
  const {
    articles, articlesCount, currentPage, tab, tag,
  } = useSelector(
    (state) => state.article.articleList,
  );

  useEffect(() => {
    if (isAuth) {
      dispatch(requestArticleFeed());
      dispatch(setTab('feed'));
    } else {
      dispatch(requestArticleAllPage());
      dispatch(setTab('all'));
    }
    return () => {
      dispatch(setTab(''));
      dispatch(setTag(''));
    };
  }, [dispatch]);

  return (
    <>
      <TabsList>
        <YourFeedTab tab={tab} token={isAuth} />
        <GlobalFeedTab tab={tab} />
        <TagFilterTab tag={tag} />
      </TabsList>

      <ArticleList articles={articles} articlesCount={articlesCount} state={currentPage} />
    </>
  );
};

export default MainView;
