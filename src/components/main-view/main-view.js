import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  const {
    tab,
    setPage,
    page,
    token,
  } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const clickHandler = (ev) => {
    ev.preventDefault();
    setPage(0);
    dispatch(setTab('feed'));
    dispatch(setTag(''));
    dispatch(requestArticleFeed());
  };
  useEffect(() => {
    dispatch(requestArticleFeed(page));
  }, [dispatch, page]);

  if (!token) return null;

  return (
    <li>
      <Tab href="" active={tab === 'feed'} onClick={clickHandler}>
        {t('yourFeed')}
      </Tab>
    </li>
  );
};

const GlobalFeedTab = ({ tab, setPage, page }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const clickHandler = (ev) => {
    ev.preventDefault();
    setPage(0);
    dispatch(setTab('all'));
    dispatch(setTag(''));
    dispatch(requestArticleAllPage());
  };
  useEffect(() => {
    dispatch(requestArticleAllPage(page));
  }, [dispatch, page]);

  return (
    <li>
      <Tab href="" active={tab === 'all'} onClick={clickHandler}>
        {t('feed')}
      </Tab>
    </li>
  );
};

const TagFilterTab = ({ tag, setPage, page }) => {
  const dispatch = useDispatch();
  if (!tag) return null;
  if (tag === '') setPage(0);
  dispatch(setTab(''));
  useEffect(() => {
    dispatch(requestArticleByTag({ tag, page }));
  }, [dispatch, tag, page]);

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
