import Footer from 'app/components/common/Footer';
import Header from 'app/components/common/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === '/' || location.pathname === '/garbage' ? (
        <Outlet />
      ) : (
        <div>
          <Container>
            <Outlet />
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 160px 0 80px;
  max-width: ${({ theme }) => theme.common.xlarge};
  min-height: 60rem;
  background-color: ${({ theme }) => theme.light.b01};
`;
export default Layout;
