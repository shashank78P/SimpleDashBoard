import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LogIn from './component/login';
import Home from './component/home_pg';
import "./app.css"
function App() {
  const login_data = (data) => {
    localStorage.setItem('Pname', data.name,);
    localStorage.setItem('Pemail', data.email,);
    localStorage.setItem('pimageUrl', data.imageUrl,);
    localStorage.setItem('ploginStatus', data.loginStatus,);
    (data.loginStatus) ? window.location.replace('http://localhost:3000/home') : window.location.replace('http://localhost:3000/');
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn getLoginDetails={login_data} />} ></Route>
        </Routes>
        <Routes>
          <Route path='/home' element={<Home getLoginDetails={login_data} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
