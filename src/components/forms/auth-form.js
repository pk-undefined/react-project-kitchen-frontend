import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ButtonComponent from '../UI/button/button';
import {
  Container, StyledForm, Title, RegLink,
} from './common/styled-form';
import { requestLogin, requestRegister } from '../../store/authSlice';

const AuthForm = (props) => {
  const dispatch = useDispatch();
  const {
    title, linkText, link, data,
  } = props;
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
        <Title>{title}</Title>
        <RegLink>
          <Link to={`/${link}`}>{linkText}</Link>
        </RegLink>
        <form onSubmit={submitForm}>
          <fieldset>{props.children}</fieldset>
          <ButtonComponent type="submit" disabled={props.inProgress}>
            {title}
          </ButtonComponent>
        </form>
      </StyledForm>
    </Container>
  );
};

export default AuthForm;
