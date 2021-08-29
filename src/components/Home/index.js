import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from './Tags';

import styled from 'styled-components';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) => dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
});

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Main = styled.main`
  width: 75%;
  margin: 0 16px;
`;

const Sidebar = styled.div`
  background-color: var(--bg-color-secondary);
  width: 25%;
  margin: 0 16px;
  padding: 16px;
  font-weight: bold;
`;

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ? agent.Articles.feed : agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className='home-page'>
        <Banner token={this.props.token} appName={this.props.appName} />
        <Section>
          <Container>
            <Main>
              <MainView />
            </Main>
            <Sidebar>
              <p>Популярные теги</p>
              <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
            </Sidebar>
          </Container>
        </Section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
