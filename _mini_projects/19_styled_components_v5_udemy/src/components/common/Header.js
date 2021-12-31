import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #005044, #003253);
  border-bottom: 2px solid #aef893;
`;

const Menu = styled.nav`
  display: block;
  position: absolute;
  width: 100%;
  top: 60px;
  right: 0;
  padding: 10px;
  background-image: linear-gradient(to right, #005044, #003253);
  border-bottom: 2px solid #aef893;

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
  color: #aef893;
  letter-spacing: 1px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
