import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../header/header';
import Article from '../article/article';
import Home from '../home/home';
import Login from '../forms/login-form';
import Profile from '../profile/profile';
import ProfileFavorites from '../profile-favorites/profile-favorites';
import Register from '../forms/register';
import SettingsForm from '../forms/settings-form';
import NewPostForm from '../forms/new-post-form';
import { requestCurrentUser } from '../../store/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('Token')) dispatch(requestCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/editor/:slug" component={NewPostForm} />
        <Route path="/editor" component={NewPostForm} />
        <Route path="/article/:id" component={Article} />
        <Route path="/settings" component={SettingsForm} />
        <Route path="/@:username/favorites" component={ProfileFavorites} />
        <Route path="/@:username" component={Profile} />
      </Switch>
    </div>
  );
  // return (
  //   <div>
  //     <Header
  //       appName={props.appName}
  //       currentUser={props.currentUser}
  //     />
  //   </div>
  // );
};

export default App;
