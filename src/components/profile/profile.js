import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../article-list/article-list';
import { requestGetProfile } from '../../store/profileSlice';
import { requestArticleByAuthor, requestArticleFavoritedBy } from '../../store/articleSlice';
import ProfileService from '../../services/profile-service';

const EditProfileSettings = (props) => {
  if (props.isUser) {
    return (
      <Link
        to="/settings"
        className="btn btn-sm btn-outline-secondary action-btn"
      >
        <i className="ion-gear-a" />
        {' '}
        Редактировать профиль
      </Link>
    );
  }
  return null;
};

const FollowUserButton = (props) => {
  if (props.isUser) {
    return null;
  }

  let classes = 'btn btn-sm action-btn';
  if (props.user.following) {
    classes += ' btn-secondary';
  } else {
    classes += ' btn-outline-secondary';
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    if (props.user.following) {
      ProfileService.unfollow(props.user.username);
    } else {
      ProfileService.follow(props.user.username);
    }
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
    >
      <i className="ion-plus-round" />
      &nbsp;
      {props.user.following ? 'Отписаться от' : 'Подписаться на'}
      {' '}
      {props.user.username}
    </button>
  );
};

const Profile = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUsername = history.location.pathname.split('/')[1].slice(1);
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [page, setPage] = useState(0);
  const countPage = 5;

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

  if (!profile) {
    return <>Error</>;
  }

  const isUser = currentUsername && user.username === currentUsername;

  return (
    <div className="profile-page">

      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">

              <img src={profile.image} className="user-img" alt={profile.username} />
              <h4>{profile.username}</h4>
              <p>{profile.bio}</p>

              <EditProfileSettings isUser={isUser} />
              <FollowUserButton
                isUser={isUser}
                user={profile}
              />

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-10 offset-md-1">

            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to={`/@${profile.username}`}
                  >
                    Мои статьи
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/@${profile.username}/favorites`}
                  >
                    Понравившиеся статьи
                  </Link>
                </li>
              </ul>
            </div>

            <ArticleList
              pager={page}
              setPager={setPage}
              countPage={countPage}
              articles={articles}
              articlesCount={articlesCount}
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;
