import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestArticleByTag, setTab } from '../../../../store/articleSlice';
import { Tab } from '../../styled-main-view';

const TagFilterTab = ({ tag, setPage, page }) => {
  const dispatch = useDispatch();

  if (!tag) {
    return null;
  }

  dispatch(setTab(''));
  setPage(0);

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

export default TagFilterTab;
