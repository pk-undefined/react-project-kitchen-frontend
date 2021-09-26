import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../article-list/article-list';
import { Tab, TabsList } from './styled-main-view';
import {
  setTab,
  setTag,
  requestArticleAllPage,
  requestArticleFeed,
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
        <Tab href="" active={props.tab === 'feed'} onClick={clickHandler}>
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
      <Tab href="" active={props.tab === 'all'} onClick={clickHandler}>
        Лента
      </Tab>
    </li>
  );
};

const TagFilterTab = (props) => {
  if (!props.tag) {
    return null;
  }

  return (
    <li>
      <Tab href="" active>
        #
        {props.tag}
      </Tab>
    </li>
  );
};

const MainView = () => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem('Token');
  const {
    articles,
    articlesCount,
    currentPage,
    tab,
    tag,
  } = useSelector((state) => state.article.articleList);

  useEffect(() => {
    if (isAuth) dispatch(setTab('feed'));
    else dispatch(setTab('all'));
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

      <ArticleList
        articles={articles}
        articlesCount={articlesCount}
        state={currentPage}
      />
    </>
  );
};

export default MainView;
