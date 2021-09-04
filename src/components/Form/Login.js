import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fieldset from './Fieldset';
import AuthForm from './AuthForm';
import {
  UPDATE_FIELD_AUTH,
  LOGIN_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

const Login = (props) => {
  const { email, password } = props;
  const changeEmail = (ev) => props.onChangeEmail(ev.target.value);
  const changePassword = (ev) => props.onChangePassword(ev.target.value);
  useEffect(() => (() => props.onUnload()), []);

  return (
    <AuthForm title="Войти" linkText="Хотите создать аккаунт?" link="register" formType="LOGIN">
      <fieldset>
        <Fieldset fieldName="E-mail" fieldValue={email} handleInputChange={changeEmail} errors={props.errors} />
        <Fieldset fieldName="Пароль" fieldValue={password} handleInputChange={changePassword} errors={props.errors} passwordField />
      </fieldset>
    </AuthForm>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
