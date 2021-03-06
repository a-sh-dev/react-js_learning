import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #ccc;
  margin: auto 0.85rem;
  display: flex;
  background: none;
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #ccc;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.isActive ? '26px' : '1px')});
`;

export const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};
