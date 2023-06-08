import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// container
import MainPage from './components/page/Main';
import Board from './components/page/Board';
import LogIn from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import SignUpResult from './components/auth/SignUpResult';
import AlgorithmsStep from './components/page/AlgorithmsStep';
import AlgorithmsChild from './components/page/AlgorithmsChild';
import AlgorithmsType from './components/page/AlgorithmsType';
import AlgorithmsWrong from './components/page/AlgorithmsWrong';
import AlgorithmsRank from './components/page/AlgorithmsRank';

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
        <Route path='/algorithms/step' Component={AlgorithmsStep}></Route>
        <Route path='/algorithms/child' Component={AlgorithmsChild}></Route>
        <Route path='/algorithms/type' Component={AlgorithmsType}></Route>
        <Route path='/algorithms/wrong' Component={AlgorithmsWrong}></Route>
        <Route path='/algorithms/rank' Component={AlgorithmsRank}></Route>
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
