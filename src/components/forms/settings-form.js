import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Fieldset from '../UI/fieldset/fieldset';
import ButtonComponent from '../UI/button/button';
import {
  Container, Title, StyledLink, StyledForm,
} from './common/styled-form';
import { requestSaveUser, logout } from '../../store/authSlice';
import { LOCAL_STORE_TOKEN_NAME } from '../../constants/consts';

const SettingsForm = (props) => {
  const { t } = useTranslation();
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
    dispatch(logout());
    localStorage.removeItem(LOCAL_STORE_TOKEN_NAME);
  };

  return (
    <Container>
      <StyledForm onSubmit={submitForm}>
        <Title>{t('settings.yourSettings')}</Title>
        <fieldset>
          <Fieldset
            type="url"
            fieldName={t('settings.profilePicture')}
            fieldValue={user.image}
            placeholder={t('settings.profilePicture')}
            handleInputChange={updateState('image')}
            errors={props.errors}
          />
          <Fieldset
            type="text"
            fieldName={t('userName')}
            fieldValue={user.username}
            placeholder={t('userName')}
            handleInputChange={updateState('username')}
            errors={props.errors}
          />
          <Fieldset
            isTextarea
            fieldName={t('settings.informationAboutYou')}
            placeholder={t('settings.informationAboutYou')}
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
            fieldName={t('settings.newPassword')}
            fieldValue={user.password ? user.password : ''}
            placeholder={t('settings.newPassword')}
            handleInputChange={updateState('password')}
            errors={props.errors}
            passwordField
          />
        </fieldset>

        <ButtonComponent type="submit">
          {t('save')}
        </ButtonComponent>
      </StyledForm>
      {/* временно инлайновый стайл пока не отключим library.css */}
      <StyledLink to="/" onClick={onClickLogout} id="link" style={{ color: '#ff0000' }}>{t('settings.logOut')}</StyledLink>
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
