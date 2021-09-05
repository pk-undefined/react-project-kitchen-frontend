import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { LOGIN, REGISTER } from '../../constants/actionTypes';
import ButtonComponent from './Button';

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
      <StyledAuthForm>
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
      </StyledAuthForm>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

const Container = styled.div`
  width: 1108px;
  margin: 0 auto;
  background: #0a0a0a;
`;
const StyledAuthForm = styled.div`
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
  font-family: "Press Start 2P";
`;
const RegLink = styled.p`
  width: 100%;
  height: 24px;
  margin: 24px 0px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: "Consolas";
  text-decoration: underline;
  a {
    color: rgba(255, 0, 0, 1);
    cursor: pointer;
  }
`;
