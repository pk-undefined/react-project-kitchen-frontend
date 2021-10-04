import React, { useState } from 'react';
import eye from '../../../images/eye.svg';
import eyeOff from '../../../images/eye-off.svg';
import errorImg from '../../../images/error-input.svg';
import stapleImg from '../../../images/staple.svg';
import { StyledInput, Icon, ErrorImage } from './styled-input';

const InputComponent = (props) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  // const [error, setError] = useState(false);
  const error = false;
  if (props.passwordField) {
    return (
      <span>
        <StyledInput
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
      <StyledInput
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
