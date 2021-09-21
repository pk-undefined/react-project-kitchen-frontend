import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import agent from '../../agent';
import Header from '../header/header';
import { APP_LOAD, REDIRECT } from '../../constants/actionTypes';
import Article from '../article/article';
import Home from '../home/home';
import Login from '../forms/login-form';
import Profile from '../profile/profile';
import ProfileFavorites from '../profile-favorites/profile-favorites';
import Register from '../forms/register';
import SettingsForm from '../forms/settings-form';
import NewPostForm from '../forms/new-post-form';

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) => dispatch({
    type: APP_LOAD, payload, token, skipTracking: true,
  }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

const App = (props) => {
  useEffect(() => {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    props.onLoad(token ? agent.Auth.current() : null, token);
  }, []);

  if (props.appLoaded) {
    return (
      <div>
        <Header
          appName={props.appName}
          currentUser={props.currentUser}
        />
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
  }
  return (
    <div>
      <Header
        appName={props.appName}
        currentUser={props.currentUser}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
