import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Dashboard from './page/dashboard';
import UserList from './page/user';
import Mentee from './page/mentee';
import ClassPage from './page/class';


function App() {

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/mentee" element={<Mentee />} />
          <Route path="/class" element={<ClassPage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
