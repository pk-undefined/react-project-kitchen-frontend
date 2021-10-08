import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { requestArticleAllPage, setTab, setTag } from '../../../../store/articleSlice';
import { Tab } from '../../styled-main-view';

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

export default GlobalFeedTab;
