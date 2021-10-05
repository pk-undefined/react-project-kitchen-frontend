import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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
  HomeIcon, SettingsIcon, EditIcon, LogInIcon,
} = icons;

const NavLink = (props) => (
  <li>
    <StyledLink {...props}>{props.children}</StyledLink>
  </li>
);

const LoggedOutView = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavLink to="/login">
        <LogInIcon className="navIcon" />
        {' '}
        {t(`${i18nElement}.SignIn`)}
      </NavLink>
    </>
  );
};
// ИСПРАВИТЬ, так как 2 таких стиля (здесь и user-info)
const UserAvatar = styled.div`
  width: 24px;
  height: 24px;
  grid-column: 1;
  grid-row: 1/3;
  margin-right: 5px;
  background: center/40px 40px url(${(props) => props.avatar}) no-repeat;
  transition: opacity 0.5s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

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
        <UserAvatar className="avatar" />
        {' '}
        {props.currentUser.username}
      </NavLink>
    </>
  );
};

const Header = () => {
  const { user, isAuth } = useSelector((state) => state.auth);
  const currentUser = Object.keys(user).length === 0 ? null : user;
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
          {isAuth ? (
            <LoggedInView currentUser={currentUser} />
          ) : (
            <LoggedOutView currentUser={currentUser} />
          )}
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
