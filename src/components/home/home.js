import React from 'react';
import { connect } from 'react-redux';
import Banner from '../banner/banner';
import MainView from '../main-view/main-view';
import Tags from '../tags/tags';
import {
  Section, Container, Main, Sidebar,
} from './styled-home';

import agent from '../../agent';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from '../../constants/actionTypes';

const { Promise } = global;

const mapStateToProps = (state) => ({
  tag: state.articleList.tag,
  tags: state.home.tags,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) => dispatch({
    type: APPLY_TAG_FILTER, tag, pager, payload,
  }),
  onLoad: (tab, pager, payload) => dispatch({
    type: HOME_PAGE_LOADED, tab, pager, payload,
  }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Home = (props) => {
  React.useEffect(() => {
    const tab = props.token ? 'feed' : 'all';
    const articlesPromise = props.token ? agent.Articles.feed : agent.Articles.all;
    props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));

    return () => {
      props.onUnload();
    };
  }, []);

  return (
    <>
      <Banner token={props.token} appName={props.appName} />
      <Section>
        <Container>
          <Main>
            <MainView />
          </Main>
          <Sidebar>
            <Tags activeTag={props.tag} tags={props.tags} onClickTag={props.onClickTag} />
          </Sidebar>
        </Container>
      </Section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
