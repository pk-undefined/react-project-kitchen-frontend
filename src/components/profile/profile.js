import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleList from '../article-list/article-list';
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

import { requestGetProfile, requestFollowUser, requestUnfollowUser } from '../../store/profileSlice';
import { requestArticleByAuthor, requestArticleFavoritedBy } from '../../store/articleSlice';

const Profile = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUsername = history.location.pathname.split('/')[1].slice(1);
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [page, setPage] = useState(0);
  const countPage = 5;

  const { EditIcon, PlusIcon, MinusIcon } = icons;
  const [currentTab, setCurrentTab] = useState('all');

  useEffect(() => {
    dispatch(requestGetProfile(currentUsername));
  }, [currentUsername]);

  useEffect(() => {
    if (props.url === 'favorites') {
      dispatch(requestArticleFavoritedBy({ author: currentUsername, page }));
    } else {
      dispatch(requestArticleByAuthor({ author: currentUsername, page }));
    }
  }, [currentUsername, page]);

  const {
    articles,
    articlesCount,
  } = useSelector((state) => state.article.articleList);
  // console.log(profile);
  const toggleFollow = (ev) => {
    ev.preventDefault();
    if (profile.following) {
      dispatch(requestUnfollowUser(currentUsername));
    } else {
      dispatch(requestFollowUser(currentUsername));
    }
  };

  const handleTabClick = (e) => {
    e.preventDefault();
    setCurrentTab(e.target.name);
  };

  if (!profile) {
    return <>Error</>;
  }

  const isUser = currentUsername && user.username === currentUsername;

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
          active={currentTab === 'favorites'}
          onClick={handleTabClick}
          name="favorites"
        >
          Любимые посты
        </Tab>
      </TabsList>

      <Content>
        <ArticleList
          pager={page}
          setPager={setPage}
          countPage={countPage}
          articles={articles}
          articlesCount={articlesCount}
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

export default Profile;
