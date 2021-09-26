import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../banner/banner';
import MainView from '../main-view/main-view';
import Tags from '../tags/tags';
import {
  Section, Container, Main, Sidebar,
} from './styled-home';
import {
  setTab,
  requestArticleGetAllTags,
  requestArticleAllPage,
  requestArticleFeed,
} from '../../store/articleSlice';

// const mapStateToProps = (state) => ({
//   tag: state.articleList.tag,
//   tags: state.home.tags,
//   appName: state.common.appName,
//   token: state.common.token,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onClickTag: (tag, pager, payload) => dispatch({
//     type: APPLY_TAG_FILTER, tag, pager, payload,
//   }),
//   onLoad: (tab, pager, payload) => dispatch({
//     type: HOME_PAGE_LOADED, tab, pager, payload,
//   }),
//   onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
// });

const Home = (props) => {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem('Token');
  const { tags } = useSelector((state) => state.article.articleList);
  const [tag] = useState('');
  const tab = isAuth ? 'feed' : 'all';

  useEffect(() => {
    if (isAuth) {
      dispatch(requestArticleFeed());
    } else {
      dispatch(requestArticleAllPage());
    }
    dispatch(requestArticleGetAllTags());
  }, []);

  const onClickTag = () => {
    dispatch(setTab(tab));
  };

  return (
    <>
      <Banner token={props.token} appName={props.appName} />
      <Section>
        <Container>
          <Main>
            <MainView />
          </Main>
          <Sidebar>
            <Tags activeTag={tag} tags={tags} onClickTag={onClickTag} />
          </Sidebar>
        </Container>
      </Section>
    </>
  );
};

export default Home;
