import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TogglerLanguage } from './toggler-language/toggler-language';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledNav,
} from './styled-header';
import { NavLink } from './nav-link/nav-link';
import HomeIcon from '../UI/icons/home-icon';
import { i18nElement } from './constants';
import { LoggedInView } from './logged-in-view/logged-in-view';
import { LoggedOutView } from './logged-out-view/logged-out-view';

const Header = () => {
  const { currentUser, isAuth } = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    currentUser: state.auth.user,
  }));
  // const currentUser = Object.keys(user).length === 0 ? null : user;
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

export default memo(Header);
