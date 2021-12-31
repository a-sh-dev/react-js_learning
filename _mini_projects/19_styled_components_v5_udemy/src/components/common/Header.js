import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Toggle } from './Toggle';
import { Logo } from './Logo';

const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.secondaryDarkColor},
    ${(props) => props.theme.primaryDarkColor}
  );
  border-bottom: 5px solid ${(props) => props.theme.primaryColor};
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  justify-content: center;
  width: 100%;
  top: 60px;
  right: 0;
  padding: 10px;
  text-align: center;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.secondaryDarkColor},
    ${(props) => props.theme.primaryDarkColor}
  );
  border-bottom: 5px solid ${(props) => props.theme.primaryColor};

  a.active {
    font-weight: 800;
  }

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
  text-transform: capitalize;
  color: ${(props) => props.theme.primaryColor};
  letter-spacing: 2px;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  cursor: pointer;
  /* padding: 5px; */

  > div {
    height: 3px;
    background: ${(props) => props.theme.primaryColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo />
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
}
