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
  LOGIN,
  LOGIN_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) => dispatch({
    type: LOGIN, payload: agent.Auth.login(email, password),
  }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

const Login = (props) => {
  const { email, password } = props;
  const changeEmail = (ev) => props.onChangeEmail(ev.target.value);
  const changePassword = (ev) => props.onChangePassword(ev.target.value);
  const submitForm = () => (ev) => {
    ev.preventDefault();
    props.onSubmit(email, password);
  };
  useEffect(() => (() => props.onUnload()), []);

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
              Войти
            </ButtonComponent>

          </fieldset>
        </form>
      </AuthForm>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
