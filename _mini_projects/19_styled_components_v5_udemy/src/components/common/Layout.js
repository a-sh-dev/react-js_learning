import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Content = styled.main`
  max-width: 1000px;
  margin: 80px auto 0 auto;
  padding: 16px;
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
