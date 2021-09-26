import styled from 'styled-components';
import React, { useState } from 'react';
import eye from '../../../images/eye.svg';
import eyeOff from '../../../images/eye-off.svg';
import errorImg from '../../../images/error-input.svg';
import stapleImg from '../../../images/staple.svg';

const InputComponent = (props) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  // const [error, setError] = useState(false);
  const error = false;
  if (props.passwordField) {
    return (
      <span>
        <Input
          type={passwordHidden ? 'password' : 'text'}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          error={error}
        />
        {!error && (
          <Icon
            src={passwordHidden ? eye : eyeOff}
            alt="Показать/скрыть"
            onClick={() => setPasswordHidden(!passwordHidden)}
            width="24"
          />
        )}
        {error && (
          <ErrorImage
            src={errorImg}
            alt="Показать/скрыть"
            onClick={() => setPasswordHidden(!passwordHidden)}
            width="24"
          />
        )}
      </span>
    );
  }
  return (
    <span>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        error={error}
      />
      {error && (
        <ErrorImage
          src={errorImg}
          alt="Показать/скрыть"
          onClick={() => setPasswordHidden(!passwordHidden)}
          width="24"
        />
      )}
      {props.includesLoader && (
        <Icon
          src={stapleImg}
          alt="Загрузить"
          onClick={() => console.log('TODO: добавить загрузку файла')}
          width="24"
        />
      )}
    </span>
  );
};

export default InputComponent;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: rgba(184, 184, 184, 1);
  font-family: 'Consolas';
  font-weight: 700;
  padding: 0 16px;
  background-color: rgba(41, 41, 41, 1);
  border: 0;
  border-radius: 2px;
  margin-top: 4px;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;
const Icon = styled.img`
  position: absolute;
  top: 37px;
  right: 16px;
  z-index: 50;
  cursor: pointer;
`;
const ErrorImage = styled.img`
  position: absolute;
  top: 37px;
  right: 16px;
  z-index: 50;
`;
