import React from 'react';
import { useTranslation } from 'react-i18next';
import icons from '../UI/icons/icons';
import { TogglerLanguage } from './toggler-language/toggler-language';
import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledLogo,
  StyledNav,
} from './styled-header';

const i18nElement = 'header';

const {
  HomeIcon, SettingsIcon, EditIcon, Avatar, LogInIcon,
} = icons;

const NavLink = (props) => (
  <li>
    <StyledLink {...props}>{props.children}</StyledLink>
  </li>
);

const LoggedOutView = () => {
  const { t } = useTranslation();

  return (
    <NavLink to="/login">
      <LogInIcon className="navIcon" />
      {' '}
      {t(`${i18nElement}.SignIn`)}
    </NavLink>
  );
};

const LoggedInView = (props) => {
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

      <NavLink to={`/@${props.currentUser.username}`}>
        <Avatar className="avatar" />
        {' '}
        {props.currentUser.username}
      </NavLink>
    </>
  );
};

const Header = (props) => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo to="/">{t('projectName')}</StyledLogo>
        <StyledNav>
          <TogglerLanguage />
          <NavLink to="/">
            <HomeIcon className="navIcon" />
            {' '}
            {t(`${i18nElement}.mainPageName`)}
          </NavLink>
          {props.currentUser ? (
            <LoggedInView currentUser={props.currentUser} />
          ) : (
            <LoggedOutView currentUser={props.currentUser} />
          )}
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
