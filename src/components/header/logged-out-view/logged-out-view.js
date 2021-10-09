import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LogInIcon from '../../UI/icons/login-icon';
import { i18nElement } from '../constants';
import { NavLink } from '../nav-link/nav-link';

export const LoggedOutView = memo(() => {
  const { t } = useTranslation();

  return (
    <NavLink to="/login">
      <LogInIcon className="navIcon" />
      {' '}
      {t(`${i18nElement}.SignIn`)}
    </NavLink>
  );
});
