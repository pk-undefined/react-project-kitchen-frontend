import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { LOGIN_PATH } from '../constants-path';

export default function ProtectedRoute({
  children,
  redirectTo = LOGIN_PATH,
  ...rest
}) {
  const refreshToken = useSelector((state) => state.auth.user.token);
  const [isUserAuthorized, setIsUserAuthorized] = useState(!!refreshToken);

  useEffect(() => {
    setIsUserAuthorized(!!refreshToken);
  }, [refreshToken]);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        const localState = location.state || {};

        return isUserAuthorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { ...localState, from: location.pathname },
            }}
          />
        );
      }}
    />
  );
}
