import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fieldset from '../UI/fieldset/fieldset';
import ButtonComponent from '../UI/button/button';
import {
  Container, Title, StyledLink, StyledForm,
} from './common/styled-form';
import { requestSaveUser } from '../../store/authSlice';

const SettingsForm = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });

  const currentUser = useSelector((state) => state.auth.user);

  const updateState = (field) => (ev) => {
    setUser({ ...user, [field]: ev.target.value });
  };

  const submitForm = (ev) => {
    ev.preventDefault();

    const userState = { ...user };
    if (!user.password) {
      delete userState.password;
    }

    dispatch(requestSaveUser(userState));
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

  const onClickLogout = () => {
    localStorage.removeItem('Token');
  };

  return (
    <Container>
      <StyledForm onSubmit={submitForm}>
        <Title>Ваши настройки</Title>
        <fieldset>
          <Fieldset
            type="url"
            fieldName="Изображение профиля"
            fieldValue={user.image}
            placeholder="Изображение профиля"
            handleInputChange={updateState('image')}
            errors={props.errors}
          />
          <Fieldset
            type="text"
            fieldName="Имя пользователя"
            fieldValue={user.username}
            placeholder="Имя пользователя"
            handleInputChange={updateState('username')}
            errors={props.errors}
          />
          <Fieldset
            isTextarea
            fieldName="Информация о вас"
            placeholder="Информация о вас"
            fieldValue={user.bio}
            handleInputChange={updateState('bio')}
            errors={props.errors}
          />
          <Fieldset
            type="email"
            fieldName="E-mail"
            fieldValue={user.email}
            placeholder="E-mail"
            handleInputChange={updateState('email')}
            errors={props.errors}
          />
          <Fieldset
            type="password"
            fieldName="Новый пароль"
            fieldValue={user.password}
            placeholder="Новый пароль"
            handleInputChange={updateState('password')}
            errors={props.errors}
            passwordField
          />
        </fieldset>

        <ButtonComponent type="submit">
          Сохранить
        </ButtonComponent>
      </StyledForm>
      {/* временно инлайновый стайл пока не отключим library.css */}
      <StyledLink to="/" onClick={onClickLogout} id="link" style={{ color: '#ff0000' }}>Выйти из аккаунта</StyledLink>
    </Container>
  );
};

// const Container = styled.div`
//   width: 1108px;
//   background: #0a0a0a;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
// `;

// const StyledSettingsForm = styled.form`
//   width: 540px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 0 auto;
//   margin-top: 32px;
// `;
// const Title = styled.h2`
//   width: 100%;
//   height: 40px;
//   margin: 16px 0px;
//   text-align: center;
//   font-size: 24px;
//   line-height: 40px;
//   color: white;
//   font-family: "Press Start 2P";
// `;

// const StyledLink = styled(Link)`
//   text-decoration: underline;
//   color: '#ff0000';
//   font-family: 'Consolas', Arial, sans-serif;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 1.5;
//   margin: 0;
//   padding: 0;
//   transition: opacity 0.5s linear;
//   :hover {
//     opacity: 0.6;
//     cursor: pointer;
//   }
// `;

export default SettingsForm;
