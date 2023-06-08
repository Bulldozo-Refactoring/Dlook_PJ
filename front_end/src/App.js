import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
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

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: 'login', element: <LogIn /> },
        { path: 'signUp', element: <SignUp /> },
        { path: 'signupresult', element: <SignUpResult /> },
        { path: 'algorithms/step', element: <AlgorithmsStep /> },
        { path: 'algorithms/child', element: <AlgorithmsChild /> },
        { path: 'algorithms/type', element: <AlgorithmsType /> },
        { path: 'algorithms/wrong', element: <AlgorithmsWrong /> },
        { path: 'algorithms/rank', element: <AlgorithmsRank /> },
        { path: 'board', element: <Board /> },
      ]
    }
  ])

  return element;
}

export default App;