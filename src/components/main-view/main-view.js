import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../article-list/article-list';
import { TabsList } from './styled-main-view';
import {
  setTab,
  setTag,
  requestArticleAllPage,
  requestArticleFeed,
} from '../../store/articleSlice';
import { LOCAL_STORE_TOKEN_NAME } from '../../constants/consts';
import { GlobalFeedTab, TagFilterTab, YourFeedTab } from './tabs';

const MainView = () => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem(LOCAL_STORE_TOKEN_NAME);
  const {
    articles,
    articlesCount,
    tab,
    tag,
  } = useSelector((state) => state.article.articleList);
  const [page, setPage] = useState(0);
  const countPage = 10;

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
        <YourFeedTab tab={tab} setPage={setPage} page={page} token={isAuth} />
        <GlobalFeedTab tab={tab} setPage={setPage} page={page} />
        <TagFilterTab tag={tag} setPage={setPage} page={page} />
      </TabsList>

      <ArticleList
        pager={page}
        setPager={setPage}
        countPage={countPage}
        articles={articles}
        articlesCount={articlesCount}
      />
    </>
  );
};

export default MainView;
