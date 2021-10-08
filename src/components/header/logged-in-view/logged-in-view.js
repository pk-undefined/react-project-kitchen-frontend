import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditIcon from '../../UI/icons/edit-icon';
import SettingsIcon from '../../UI/icons/settings-icon';
import { i18nElement } from '../constants';
import { NavLink } from '../nav-link/nav-link';
import { UserAvatar } from '../user-avatar/user-avatar';

export const LoggedInView = memo((props) => {
  const { t } = useTranslation();

  return (
    <>
      <NavLink to="/editor">
        <EditIcon className="navIcon" />
        {' '}
        {t(`${i18nElement}.NewEntry`)}
      </NavLink>

      <NavLink to="/settings">
        <SettingsIcon className="navIcon" />
        {' '}
        {t(`${i18nElement}.Settings`)}
      </NavLink>

      <NavLink to={`/@${props.currentUser ? props.currentUser.username : ''}`}>
        <UserAvatar className="avatar" defaultImage="https://static.productionready.io/images/smiley-cyrus.jpg" />
        {' '}
        {props.currentUser ? props.currentUser.username : ''}
      </NavLink>
    </>
  );
});
