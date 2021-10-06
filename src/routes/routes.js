import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ArticlePage,
  HomePage,
  LoginPage,
  NewPostPage,
  ProfileFavoritesPage,
  RegisterPage,
  SettingsPage,
  ProfilePage,
} from '../pages';
import {
  LOGIN_PATH,
  MAIN_PATH,
  REGISTER_PATH,
  EDITOR_PATH,
  ARTICLE_PATH,
  SETTINGS_PATH,
  PROFILE_FAVORITES_PATH,
  PROFILE_PATH,
} from './constants-path';

export const RoutesRoot = () => (
  <Switch>
    <Route exact path={MAIN_PATH}>
      <HomePage />
    </Route>
    <Route path={LOGIN_PATH}>
      <LoginPage />
    </Route>
    <Route path={REGISTER_PATH}>
      <RegisterPage />
    </Route>
    <Route path={`${EDITOR_PATH}/:slug`}>
      <NewPostPage />
    </Route>
    <Route path={EDITOR_PATH}>
      <NewPostPage />
    </Route>
    <Route path={`${ARTICLE_PATH}/:id`}>
      <ArticlePage />
    </Route>
    <Route path={SETTINGS_PATH}>
      <SettingsPage />
    </Route>
    <Route path={PROFILE_FAVORITES_PATH}>
      <ProfileFavoritesPage />
    </Route>
    <Route path={PROFILE_PATH}>
      <ProfilePage />
    </Route>
  </Switch>
);
