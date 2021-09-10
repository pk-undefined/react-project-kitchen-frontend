import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { LOGIN, REGISTER } from '../../constants/actionTypes';
import ButtonComponent from '../UI/button/button';
import {
  Container, StyledForm, Title, RegLink,
} from './common/styled-form';

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => dispatch({
    type: LOGIN,
    payload: agent.Auth.login(email, password),
  }),
  onRegister: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload });
  },
});

const AuthForm = (props) => {
  const {
    email, password, username, title, linkText, link, formType,
  } = props;
  const submitForm = (ev) => {
    ev.preventDefault();
    if (formType === 'REGISTER') {
      props.onRegister(username, email, password);
    }
    if (formType === 'LOGIN') {
      props.onLogin(email, password);
    }
  };
  // useEffect(() => () => props.onUnload(formType), []);

  return (
    <Container>
      <StyledForm>
        <Title>{title}</Title>
        <RegLink>
          <Link to={`/${link}`}>{linkText}</Link>
        </RegLink>
        <form onSubmit={submitForm}>
          <fieldset>{props.children}</fieldset>
          <ButtonComponent type="submit" disabled={props.inProgress}>
            {title}
          </ButtonComponent>
        </form>
      </StyledForm>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
