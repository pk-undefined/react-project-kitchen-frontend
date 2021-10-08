import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { MAIN_PATH } from '../constants-path';

export default function ProtectedFromAuthorizedRoute({
  children,
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
      render={({ location }) => (!isUserAuthorized ? (
        children
      ) : (
        <Redirect
          to={{
            pathname:
                (location.state
                  && location.state.from)
                || MAIN_PATH,
            state: {},
          }}
        />
      ))}
    />
  );
}
