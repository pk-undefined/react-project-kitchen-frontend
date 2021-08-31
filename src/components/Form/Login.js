import { Container, AuthForm, Title, RegLink, Fieldset, Input, EyeImage, Button } from './Styles';
import eye from '../../images/eye.svg';
import eyeOff from '../../images/eye-off.svg';
import { Link } from 'react-router-dom';
import ListErrors from '../ListErrors';
import React, { useEffect, useState } from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

const Login = (props) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const email = props.email;
  const password = props.password;
  const changeEmail = ev => props.onChangeEmail(ev.target.value);
  const changePassword = ev => props.onChangePassword(ev.target.value);
  const submitForm = (email, password) => ev => {
    ev.preventDefault();
    props.onSubmit(email, password);
  }
  useEffect(() => {
    return () => {
      props.onUnload();
    }
  }, []);

  return (
      <Container>
        <AuthForm>
          <Title>Войти</Title>
            <RegLink>
              <Link to="/register">
                Хотите создать аккаунт?
              </Link>
            </RegLink>
            <form onSubmit={submitForm(email, password)}>
              <fieldset>

                <Fieldset>
                <p>E-mail</p>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={changeEmail}
                />
                <ListErrors errors={props.errors} />
                </Fieldset>

                <Fieldset>
                <p>Пароль</p>
                <Input
                  type={passwordHidden ? "password" : "text"}
                  placeholder="Пароль"
                  value={password}
                  onChange={changePassword}
                />
                <EyeImage
                  src={passwordHidden ? eye : eyeOff} 
                  alt="Показать/скрыть"
                  onClick={()=>setPasswordHidden(!passwordHidden)}
                  width="24"
                />
                <ListErrors errors={props.errors}/>
                </Fieldset>

                <Button
                  type="submit"
                  disabled={props.inProgress}>
                  Войти
                </Button>

              </fieldset>
            </form>
        </AuthForm>
      </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
