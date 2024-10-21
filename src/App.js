import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' Component={HomePage} />
          <Route path='/login' Component={LoginPage}/>
          <Route path='/signup' Component={SignupPage}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
