import React, { useState } from 'react';
import Fieldset from '../UI/fieldset/fieldset';
import AuthForm from './auth-form';

const Register = (props) => {
  const [state, setState] = useState({
    username: '',
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
    <AuthForm data={state} title="Зарегистрироваться" linkText="Уже есть аккаунт?" link="login" formType="REGISTER">
      <fieldset>
        <Fieldset type="text" fieldName="username" fieldValue={state.username} placeholder="Имя пользователя" handleInputChange={onChange} errors={props.errors} />
        <Fieldset type="email" fieldName="email" fieldValue={state.email} placeholder="E-mail" handleInputChange={onChange} errors={props.errors} />
        <Fieldset type="password" fieldName="password" fieldValue={state.password} placeholder="Пароль" handleInputChange={onChange} errors={props.errors} passwordField />
      </fieldset>
    </AuthForm>
  );
};

export default Register;
