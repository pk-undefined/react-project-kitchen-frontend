import React, { useState } from 'react';
import Fieldset from '../UI/fieldset/fieldset';
import AuthForm from './auth-form';

const Login = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const onChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <AuthForm data={state} title="Войти" linkText="Хотите создать аккаунт?" link="register" formType="LOGIN">
      <fieldset>
        <Fieldset type="email" fieldName="email" fieldValue={state.email} placeholder="E-mail" handleInputChange={onChange} errors={props.errors} />
        <Fieldset type="password" fieldName="password" fieldValue={state.password} placeholder="Пароль" handleInputChange={onChange} errors={props.errors} passwordField />
      </fieldset>
    </AuthForm>
  );
};

export default Login;
