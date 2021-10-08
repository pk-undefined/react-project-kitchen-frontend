import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ButtonComponent from '../UI/button/button';
import {
  Container, StyledForm, Title, RegLink,
} from './common/styled-form';
import { requestLogin, requestRegister } from '../../store/authSlice';

const AuthForm = (props) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const {
    title, linkText, link, data,
  } = props;
  const localizeTitle = useMemo(() => {
    if (title === 'Войти') {
      return t('signIn');
    }

    if (title === 'Зарегистрироваться') {
      return t('signUp');
    }

    return t('signUp');
  }, [title, i18n.language]);
  const submitForm = (ev) => {
    ev.preventDefault();
    if (title === 'Войти') {
      dispatch(requestLogin({ email: data.email, password: data.password }));
    }
    if (title === 'Зарегистрироваться') {
      dispatch(requestRegister({
        username: data.username,
        email: data.email,
        password: data.password,
      }));
    }
  };
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) return <Redirect to="/" />;

  return (
    <Container>
      <StyledForm>
        <Title>{localizeTitle}</Title>
        <RegLink>
          <Link to={`/${link}`}>{linkText}</Link>
        </RegLink>
        <form onSubmit={submitForm}>
          <fieldset>{props.children}</fieldset>
          <ButtonComponent type="submit" disabled={props.inProgress}>
            {localizeTitle}
          </ButtonComponent>
        </form>
      </StyledForm>
    </Container>
  );
};

export default AuthForm;
