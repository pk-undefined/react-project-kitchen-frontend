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
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

const Register = (props) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const changeEmail = ev => props.onChangeEmail(ev.target.value);
  const changePassword = ev => props.onChangePassword(ev.target.value);
  const changeUsername = ev => props.onChangeUsername(ev.target.value);
  const submitForm = (username, email, password) => ev => {
    ev.preventDefault();
    props.onSubmit(username, email, password);
  }

  useEffect(() => {
    return () => {
      props.onUnload();
    }
  }, []);

  const email = props.email;
  const password = props.password;
  const username = props.username;
  
  return (
    <Container>
      <AuthForm>
        <Title>Зарегистрироваться</Title>
          <RegLink>
            <Link to="/login">
              Уже есть аккаунт?
            </Link>
          </RegLink>
          <form onSubmit={submitForm(username, email, password)}>
            <fieldset>

              <Fieldset>
                <p>Имя пользователя</p>
                <Input
                  type="text"
                  placeholder="Username"
                  value={props.username}
                  onChange={changeUsername}
                />
                <ListErrors errors={props.errors} />
              </Fieldset>

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
                Зарегистрироваться
              </Button>

            </fieldset>
          </form>
      </AuthForm>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
