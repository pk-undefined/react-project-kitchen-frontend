import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  ArticlePage,
  HomePage,
  LoginPage,
  NewPostPage,
  ProfileFavoritesPage, ProfilePage, RegisterPage,
  SettingsPage,
} from '../pages';
import {
  ARTICLE_PATH, EDITOR_PATH, LOGIN_PATH,
  MAIN_PATH, PROFILE_FAVORITES_PATH,
  PROFILE_PATH, REGISTER_PATH, SETTINGS_PATH,
} from './constants-path';
import ProtectedFromAuthorizedRoute from './protected-from-authorized-route/protected-from-authorized-route';
import ProtectedRoute from './protected-route/protected-route';

export const RoutesRoot = () => (
  <Switch>
    <Route exact path={MAIN_PATH}>
      <HomePage />
    </Route>
    <ProtectedFromAuthorizedRoute path={LOGIN_PATH}>
      <LoginPage />
    </ProtectedFromAuthorizedRoute>
    <ProtectedFromAuthorizedRoute path={REGISTER_PATH}>
      <RegisterPage />
    </ProtectedFromAuthorizedRoute>
    <ProtectedRoute path={`${EDITOR_PATH}/:slug`}>
      <NewPostPage />
    </ProtectedRoute>
    <ProtectedRoute path={EDITOR_PATH}>
      <NewPostPage />
    </ProtectedRoute>
    <ProtectedRoute path={`${ARTICLE_PATH}/:id`}>
      <ArticlePage />
    </ProtectedRoute>
    <ProtectedRoute path={SETTINGS_PATH}>
      <SettingsPage />
    </ProtectedRoute>
    <ProtectedRoute path={PROFILE_FAVORITES_PATH}>
      <ProfileFavoritesPage />
    </ProtectedRoute>
    <ProtectedRoute path={PROFILE_PATH}>
      <ProfilePage />
    </ProtectedRoute>
  </Switch>
);
