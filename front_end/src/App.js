import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// container
import MainPage from './components/page/Main';
import Board from './components/page/Board';
import LogIn from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import SignUpResult from './components/auth/SignUpResult';
import Algorithms from './components/page/Algorithms';

function App() {
  return (
    <>
      <Layout>
      <Routes>
        {/* mainpage */}
        <Route path='/' Component={MainPage}></Route>
        {/* login - signup */}
        <Route path='/login' Component={LogIn}></Route>
        <Route path='/signUp' Component={SignUp}></Route>
        <Route path='/signupresult' Component={SignUpResult}></Route>
        {/* 알고리즘 */}
        <Route path='/algorithms/step' Component={Algorithms}></Route>
        <Route path='/algorithms/type'></Route>
        {/* 게시판 */}
        <Route path='/board' Component={Board}></Route>
        {/* 쓰레기통 */}
        <Route path='/garbage'></Route>
        {/* 더보기 */}
      </Routes>
      </Layout>
    </>
  );
}

export default App;
