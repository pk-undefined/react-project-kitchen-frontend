import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Fieldset from '../UI/fieldset/fieldset';
import AuthForm from './auth-form';

const Register = (props) => {
  const { t } = useTranslation();
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
    <AuthForm data={state} title="Зарегистрироваться" linkText={t('alreadyHaveAnAccount')} link="login" formType="REGISTER">
      <fieldset>
        <Fieldset type="text" fieldName="username" fieldValue={state.username} placeholder={t('userName')} handleInputChange={onChange} errors={props.errors} />
        <Fieldset type="email" fieldName="email" fieldValue={state.email} placeholder="E-mail" handleInputChange={onChange} errors={props.errors} />
        <Fieldset type="password" fieldName="password" fieldValue={state.password} placeholder={t('password')} handleInputChange={onChange} errors={props.errors} passwordField />
      </fieldset>
    </AuthForm>
  );
};

export default Register;
