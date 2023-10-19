import './App.css';
import {BrowserRouter , Routes , Route, useLocation} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const duration = 1000;
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={duration}
        key={location.pathname}
        classNames="page"
        unmountOnExit
        
      >
        <Routes location={location}>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
