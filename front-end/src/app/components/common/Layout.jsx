import Footer from 'app/components/common/Footer';
import Header from 'app/components/common/Header';
// import { getLogout } from 'app/slices/CookieSlice';
// import Cookies from 'js-cookie';
// import { useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

// const LogoutOnWindowClose = () => {
//   const dispatch = useDispatch();
//   const logoutHandledRef = useRef(false);

//   useEffect(() => {
//     const handleWindowClose = async () => {
//       if (!logoutHandledRef.current) {
//         logoutHandledRef.current = true;

//         try {
//           await dispatch(getLogout()).unwrap();
//           alert('창이 닫혔습니다. 로그아웃되었습니다.');
//         } catch (error) {
//           console.log('로그아웃 실패!');
//         }
//       }
//     };

//     const handleBeforeUnload = (event) => {
//       event.preventDefault();
//       event.returnValue = '';
//       handleWindowClose();
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [dispatch]);

//   return null;
// };

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === '/' ? (
        <Outlet />
      ) : (
        <Container>
          <Outlet />
        </Container>
      )}
      <Footer />
      {/* <LogoutOnWindowClose /> */}
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
