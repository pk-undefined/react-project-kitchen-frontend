import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header/header';
import { requestCurrentUser } from '../../store/authSlice';
import { useInitialI18nFromCookie } from '../../i18n/hooks/use-initial-i18n-from-cookie';
import { RoutesRoot } from '../../routes/routes';
import { LOCAL_STORE_TOKEN_NAME } from '../../constants/consts';
import ErrorBoundry from '../error-boundry/error-boundry';

const App = () => {
  const dispatch = useDispatch();

  useInitialI18nFromCookie();

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORE_TOKEN_NAME)) dispatch(requestCurrentUser());
  }, [dispatch]);

  return (
    <ErrorBoundry>
      <div>
        <Header />
        <RoutesRoot />
      </div>
    </ErrorBoundry>

  );
};

export default App;
