import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Fieldset from '../UI/fieldset/fieldset';
import AuthForm from './auth-form';

const Login = (props) => {
  const { t } = useTranslation();
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
    <AuthForm data={state} title="Войти" linkText={t('doYouWantToCreateAnAccount')} link="register" formType="LOGIN">
      <fieldset>
        <Fieldset type="email" fieldName="email" fieldValue={state.email} placeholder="E-mail" handleInputChange={onChange} errors={props.errors} />
        <Fieldset type="password" fieldName="password" fieldValue={state.password} placeholder={t('password')} handleInputChange={onChange} errors={props.errors} passwordField />
      </fieldset>
    </AuthForm>
  );
};

export default Login;
