import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Footer from 'app/components/common/Footer';
import Header from 'app/components/common/Header';

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
  background-color: ${({ theme }) => theme.lightTheme.bg100};
`;
export default Layout;
