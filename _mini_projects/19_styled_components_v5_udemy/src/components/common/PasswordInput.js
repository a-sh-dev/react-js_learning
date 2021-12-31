import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 10px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  border: 1px solid #ccc;
  height: 40px;
  font-size: 0.9em;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  color: black;
`;

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword((show) => !show)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ''}</div>
    </>
  );
}
