import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import ArticleList from '../article-list/article-list';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import {
  ProfilePage,
  TabsList,
  Title,
  UserProfile,
  Avatar,
  ButtonText,
  StyledLink,
  Sidebar,
  Content,
} from './styled-profile';
import Tab from '../tab/tab';
import { Button } from '../UI/button/styled-button';
import Tags from '../tags/tags';
import icons from '../UI/icons/icons';

const mapStateToProps = (state) => ({
  ...state.articleList,
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onFollow: (username) => dispatch({
    type: FOLLOW_USER,
    payload: agent.Profile.follow(username),
  }),
  onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnfollow: (username) => dispatch({
    type: UNFOLLOW_USER,
    payload: agent.Profile.unfollow(username),
  }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

const Profile = (props) => {
  const {
    profile,
    currentUser,
    onLoad,
    onUnload,
    onFollow,
    onUnfollow,
    pager,
    articles,
    articlesCount,
    currentPage,
  } = props;

  const { EditIcon, PlusIcon, MinusIcon } = icons;
  const [currentTab, setCurrentTab] = useState('all');
  useEffect(() => {
    onLoad(
      Promise.all([
        agent.Profile.get(props.match.params.username),
        agent.Articles.byAuthor(props.match.params.username),
      ]),
    );
    console.log('profffile', profile);
    return () => {
      onUnload();
    };
  }, []);

  if (!profile) {
    return null;
  }

  const toggleFollow = (ev) => {
    ev.preventDefault();
    if (profile.following) {
      onUnfollow(props.user.username);
    } else {
      onFollow(profile.username);
    }
  };
  // TODO: добавить переключение через роутер
  const handleTabClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.name);
    console.log('TODO: добавить переключение через роутер');
  };

  const isUser = currentUser && profile.username === currentUser.username;

  return (
    <ProfilePage>
      <UserProfile>
        <Avatar src={profile.image} alt={profile.username} />
        <Title>{profile.username}</Title>
        {isUser ? (
          <StyledLink to="/settings">
            <Button type="button" withoutMargin>
              <EditIcon />
              Редактировать профиль
            </Button>
          </StyledLink>
        ) : (
          <Button type="button" onClick={toggleFollow}>
            {profile && profile.following ? <MinusIcon /> : <PlusIcon />}
            <ButtonText>
              {profile && profile.following ? 'Отписаться' : 'Подписаться'}
            </ButtonText>
          </Button>
        )}
      </UserProfile>
      <TabsList>
        <Tab
          to={`/@${profile.username}`}
          active={currentTab === 'all'}
          onClick={handleTabClick}
          name="all"
        >
          Ваши посты
        </Tab>
        <Tab
          to={`/@${profile.username}/favorites`}
          active={currentTab === 'favourite'}
          onClick={handleTabClick}
          name="favourite"
        >
          Любимые посты
        </Tab>
      </TabsList>
      <Content>
        <ArticleList
          pager={pager}
          articles={articles}
          articlesCount={articlesCount}
          state={currentPage}
        />
        <Sidebar>
          <Tags
            activeTag={props.tag}
            tags={props.tags}
            onClickTag={props.onClickTag}
          />
        </Sidebar>
      </Content>
    </ProfilePage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
