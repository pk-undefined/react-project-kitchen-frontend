import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { requestArticleFeed, setTab, setTag } from '../../../../store/articleSlice';
import { Tab } from '../../styled-main-view';

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

  if (!token) {
    return null;
  }

  return (
    <li>
      <Tab href="" active={tab === 'feed'} onClick={clickHandler}>
        {t('yourFeed')}
      </Tab>
    </li>
  );
};

export default YourFeedTab;
