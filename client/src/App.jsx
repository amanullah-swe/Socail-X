import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import Login from './pages/loginPage/Login.jsx';
import UserProfile from 'pages/profilePage/UserProfile.jsx';
import { useSelector } from 'react-redux';
import Register from './pages/loginPage/Register.jsx'
function App() {
  const { mode, token, user } = useSelector((state) => state.auth);
  console.log('app');
  return (
    <div className="App bg-[#edeeed] dark:bg-[#111211] text-text dark:text-dark-text" >
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={token ? <Home /> : <Navigate to={'/'} />} />
          <Route path='/profile/:personId' element={token ? <UserProfile /> : <Navigate to={'/'} />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
