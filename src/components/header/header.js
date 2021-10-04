import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import icons from '../UI/icons/icons';
import {
  StyledLink, StyledHeader, StyledContainer, StyledLogo, StyledNav,
} from './styled-header';

const {
  HomeIcon, SettingsIcon, EditIcon, LogInIcon,
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
      <UserAvatar
        avatar={props.currentUser.image}
      />
      {' '}
      {props.currentUser.username}
    </NavLink>
  </>
);

const Header = () => {
  const { user, isAuth } = useSelector((state) => state.auth);
  const currentUser = Object.keys(user).length === 0 ? null : user;

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo to="/">Проектная кухня</StyledLogo>
        <StyledNav>
          <NavLink to="/">
            <HomeIcon className="navIcon" />
            {' '}
            Главная
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
