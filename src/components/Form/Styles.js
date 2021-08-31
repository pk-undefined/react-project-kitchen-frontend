import styled from 'styled-components';

export const Container = styled.div`
  width: 1108px;
  margin: 0 auto;
  background: #0A0A0A;
`;
export const AuthForm = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 32px;
`;
export const Title = styled.h2`
  width: 100%;
  height: 40px;
  margin: 16px 0px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
  color: white;
  font-family: 'Press Start 2P';
`;
export const RegLink = styled.p`
  width: 100%;
  height: 24px;
  margin: 24px 0px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Consolas';
  text-decoration: underline;
  a{
    color: rgba(255, 0, 0, 1);
    cursor: pointer;
  }
`;
export const Fieldset = styled.fieldset`
  width: 100%;
  position: relative;
  margin-top: 12px;
  p{
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Consolas';
    color: rgba(235, 235, 235, 1);
    margin: 0px;
  }
`;
export const Input = styled.input`
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
`;
export const EyeImage = styled.img`
  position: absolute;
  top: 37px;
  right: 16px;
  z-index: 50;
  cursor: pointer;
`;
export const Button = styled.button`
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  color: rgba(235, 235, 235, 1);
  font-family: 'Consolas';
  font-weight: 700;
  text-align: center;
  background-color: #FF0000;
  border: 1.5px solid rgba(235, 235, 235, 1);
  border-radius: 2px;
  padding: 0 16px 0 16px 0;
  margin: 40px 0 32px 0;
  float: right;
`;