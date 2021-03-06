import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Content = styled.main`
  max-width: 1000px;
  margin: 80px auto 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  font-weight: 300;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
    color: ${(props) => props.theme.primaryDarkColor};
  }

  a {
    box-shadow: inset 0 -3px ${(p) => p.theme.primaryColor};
    text-decoration: none;
  }

  a:visited {
    color: ${(p) => p.theme.primaryDarkColor};
  }

  a:hover {
    background-color: ${(p) => p.theme.primaryColor};
    transition: all 0.3s;
  }
`;

export default function Layout() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}
