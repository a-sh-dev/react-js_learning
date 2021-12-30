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
  background: rgb(0, 45, 79);
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  border-bottom: none;
  margin: auto 0 auto auto;
  width: initial;
  left: initial;
  top: initial;
`;

const StyledLink = styled(NavLink)`
  padding: 1rem;
  display: block;
  text-align: center;
  margin: auto 0;
  text-decoration: none;
  text-transform: uppercase;
  color: rgb(177, 255, 177);
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
