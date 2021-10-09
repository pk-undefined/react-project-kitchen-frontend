import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { requestArticleByTag, setTab } from '../../../../store/articleSlice';
import { Tab } from '../../styled-main-view';

const TagFilterTab = memo(({ tag, setPage, page }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTab(''));
    setPage(0);
  }, []);

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
});

export default TagFilterTab;
