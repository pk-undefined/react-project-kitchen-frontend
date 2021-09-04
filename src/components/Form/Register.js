import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fieldset from './Fieldset';
import AuthForm from './AuthForm';
import {
  UPDATE_FIELD_AUTH,
  REGISTER_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
});

const Register = (props) => {
  const { email, password, username } = props;
  const changeEmail = (ev) => props.onChangeEmail(ev.target.value);
  const changePassword = (ev) => props.onChangePassword(ev.target.value);
  const changeUsername = (ev) => props.onChangeUsername(ev.target.value);
  useEffect(() => (() => props.onUnload()), []);

  return (
    <AuthForm title="Зарегистрироваться" linkText="Уже есть аккаунт?" link="login" formType="REGISTER">
      <fieldset>
        <Fieldset type="input" fieldName="Имя пользователя" fieldValue={username} handleInputChange={changeUsername} errors={props.errors} />
        <Fieldset type="input" fieldName="E-mail" fieldValue={email} handleInputChange={changeEmail} errors={props.errors} />
        <Fieldset type="input" fieldName="Пароль" fieldValue={password} handleInputChange={changePassword} errors={props.errors} passwordField />
      </fieldset>
    </AuthForm>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
