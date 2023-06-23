import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding: 80px 0 0;
  min-height: 800px;
  background-color: var(--bg-100);
`;
export default Layout;
