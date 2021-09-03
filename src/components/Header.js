import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icons from './UI/icons/icons';

const {
  HomeIcon, SettingsIcon, EditIcon, Avatar, LogInIcon,
} = icons;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-secondary);
`;

const StyledContainer = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-default);
  font-size: 16px;
  line-height: 28px;
  font-family: 'Press Start 2P';
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: ${(props) => (props.active ? 'var(--color-default)' : 'var(--color-inactive)')};

  :hover {
    color: var(--color-default);
  }

  .avatar {
    margin-right: 8px;
  }

  .navIcon {
    margin-right: 8px;
  }
`;

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
        <NavLink to="/" active>
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
