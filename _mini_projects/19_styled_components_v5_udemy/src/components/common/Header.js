import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    var(--dark-green),
    var(--dark-blue)
  );
  border-bottom: 5px solid var(--blue);
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 60px;
  right: 0;
  padding: 10px;
  background-image: linear-gradient(
    to right,
    var(--dark-green),
    var(--dark-blue)
  );
  border-bottom: 5px solid var(--blue);

  @media (min-width: 768px) {
    display: flex;
    border-bottom: none;
    margin: auto 0 auto auto;
    width: initial;
    left: initial;
    top: initial;
    background: none;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 1rem;
  display: block;
  text-align: center;
  margin: auto 0;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--blue);
  letter-spacing: 1px;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  cursor: pointer;
  /* padding: 5px; */

  > div {
    height: 3px;
    background: var(--blue);
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
