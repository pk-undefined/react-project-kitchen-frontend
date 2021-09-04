import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Fieldset from './Fieldset';
import ButtonComponent from './Button';
import agent from '../../agent';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT,
} from '../../constants/actionTypes';

const mapStateToProps = (state) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user) => dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

const SettingsForm = (props) => {
  const { currentUser, onSubmitForm, onClickLogout } = props;
  const [user, setUser] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  const updateState = (field) => (ev) => {
    setUser({ ...user, [field]: ev.target.value });
  };

  const submitForm = (ev) => {
    ev.preventDefault();

    const userState = { ...user };
    if (!user.password) {
      delete userState.password;
    }

    onSubmitForm(userState);
  };

  useEffect(() => {
    if (currentUser) {
      setUser({
        image: currentUser.image || '',
        username: currentUser.username,
        bio: currentUser.bio,
        email: currentUser.email,
      });
    }
  }, [currentUser]);

  return (
    <Container>
      <StyledSettingsForm onSubmit={submitForm}>
        <Title>Ваши настройки</Title>
        <fieldset>
          <Fieldset
            type="input"
            fieldName="Изображение профиля"
            fieldValue={user.image}
            handleInputChange={updateState('image')}
            errors={props.errors}
          />
          <Fieldset
            type="input"
            fieldName="Имя пользователя"
            fieldValue={user.username}
            handleInputChange={updateState('username')}
            errors={props.errors}
          />
          <Fieldset
            type="textarea"
            fieldName="Информация о вас"
            fieldValue={user.bio}
            handleInputChange={updateState('bio')}
            errors={props.errors}
          />
          <Fieldset
            type="input"
            fieldName="E-mail"
            fieldValue={user.email}
            handleInputChange={updateState('email')}
            errors={props.errors}
          />
          <Fieldset
            type="input"
            fieldName="Новый пароль"
            fieldValue={user.password}
            handleInputChange={updateState('password')}
            errors={props.errors}
            passwordField
          />
        </fieldset>

        <ButtonComponent type="submit">
          Сохранить
        </ButtonComponent>
      </StyledSettingsForm>
      {/* временно инлайновый стайл пока не отключим library.css */}
      <StyledLink to="/" onClick={onClickLogout} id="link" style={{ color: '#ff0000' }}>Выйти из аккаунта</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  width: 1108px;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const StyledSettingsForm = styled.form`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 32px;
`;
const Title = styled.h2`
  width: 100%;
  height: 40px;
  margin: 16px 0px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
  color: white;
  font-family: "Press Start 2P";
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: '#ff0000';
  font-family: 'Consolas', Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  transition: opacity 0.5s linear;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);