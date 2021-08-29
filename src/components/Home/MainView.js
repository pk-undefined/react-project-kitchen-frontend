import ArticleList from '../ArticleList';
import React from 'react';
import styled, { css } from 'styled-components';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';

const StyledNav = styled.ul`
  display: flex;
  box-shadow: inset 0px -1px 0px #1f1f1f;
`;

const StyledTab = styled.a`
  padding: 16px 24px;
  color: var(--color-inactive);
  display: block;
  font-weight: bold;

  ${(props) =>
    props.active &&
    css`
      color: var(--color-default);
      box-shadow: inset 0px -2px 0px var(--color-accent);
    `}
`;

const YourFeedTab = (props) => {
  if (props.token) {
    const clickHandler = (ev) => {
      ev.preventDefault();
      props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    };

    return (
      <li>
        <StyledTab href='' active={props.tab === 'feed'} onClick={clickHandler}>
          Your Feed
        </StyledTab>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = (props) => {
  const clickHandler = (ev) => {
    ev.preventDefault();
    props.onTabClick('all', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li>
      <StyledTab href='' active={props.tab === 'all'} onClick={clickHandler}>
        Global Feed
      </StyledTab>
    </li>
  );
};

const TagFilterTab = (props) => {
  if (!props.tag) {
    return null;
  }

  return (
    <li className='nav-item'>
      <StyledTab href='' active>
        #{props.tag}
      </StyledTab>
    </li>
  );
};

const mapStateToProps = (state) => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload }),
});

const MainView = (props) => {
  return (
    <React.Fragment>
      <StyledNav>
        <YourFeedTab tab={props.tab} onTabClick={props.onTabClick} token={props.token} />
        <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />
        <TagFilterTab tag={props.tag} />
      </StyledNav>

      <ArticleList
        pager={props.pager}
        articles={props.articles}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
      />
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
