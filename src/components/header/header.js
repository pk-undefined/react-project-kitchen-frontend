import React from 'react';
import icons from '../UI/icons/icons';
import {
  StyledLink, StyledHeader, StyledContainer, StyledLogo, StyledNav,
} from './styled-header';

const {
  HomeIcon, SettingsIcon, EditIcon, Avatar, LogInIcon,
} = icons;

const NavLink = (props) => (
  <li>
    <StyledLink {...props}>{props.children}</StyledLink>
  </li>
);

const LoggedOutView = () => (
  <>
    <NavLink to="/login">
      <LogInIcon className="navIcon" />
      {' '}
      Войти
    </NavLink>
  </>
);

const LoggedInView = (props) => (
  <>
    <NavLink to="/editor">
      <EditIcon className="navIcon" />
      {' '}
      Новая запись
    </NavLink>

    <NavLink to="/settings">
      <SettingsIcon className="navIcon" />
      {' '}
      Настройки
    </NavLink>

    <NavLink to={`/@${props.currentUser.username}`}>
      <Avatar className="avatar" />
      {' '}
      {props.currentUser.username}
    </NavLink>
  </>
);

const Header = (props) => (
  <StyledHeader>
    <StyledContainer>
      <StyledLogo to="/">Проектная кухня</StyledLogo>
      <StyledNav>
        <NavLink to="/">
          <HomeIcon className="navIcon" />
          {' '}
          Главная
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

export default Header;
