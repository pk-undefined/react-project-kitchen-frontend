import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListErrors from '../ListErrors';
import agent from '../../agent';
import InputComponent from './Input';
import ButtonComponent from './Button';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload });
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
});

const Register = (props) => {
  const changeEmail = (ev) => props.onChangeEmail(ev.target.value);
  const changePassword = (ev) => props.onChangePassword(ev.target.value);
  const changeUsername = (ev) => props.onChangeUsername(ev.target.value);
  const submitForm = (username, email, password) => (ev) => {
    ev.preventDefault();
    props.onSubmit(username, email, password);
  };

  useEffect(() => (() => props.onUnload()), []);

  const { email, password, username } = props;

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
              <InputComponent
                passvordField={false}
                type="text"
                placeholder="Username"
                value={props.username}
                onChange={changeUsername}
              />
              <ListErrors errors={props.errors} />
            </Fieldset>

            <Fieldset>
              <p>E-mail</p>
              <InputComponent
                passvordField={false}
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={changeEmail}
              />
              <ListErrors errors={props.errors} />
            </Fieldset>

            <Fieldset>
              <p>Пароль</p>
              <InputComponent
                passwordField="true"
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={changePassword}
              />
              <ListErrors errors={props.errors} />
            </Fieldset>

            <ButtonComponent
              type="submit"
              disabled={props.inProgress}
            >
              Зарегистрироваться
            </ButtonComponent>

          </fieldset>
        </form>
      </AuthForm>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const Container = styled.div`
  width: 1108px;
  margin: 0 auto;
  background: #0A0A0A;
`;
const AuthForm = styled.div`
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
  font-family: 'Press Start 2P';
`;
const RegLink = styled.p`
  width: 100%;
  height: 24px;
  margin: 24px 0px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Consolas';
  text-decoration: underline;
  a{
    color: rgba(255, 0, 0, 1);
    cursor: pointer;
  }
`;
const Fieldset = styled.fieldset`
  width: 100%;
  position: relative;
  margin-top: 12px;
  p{
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Consolas';
    color: rgba(235, 235, 235, 1);
    margin: 0px;
  }
`;
