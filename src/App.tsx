import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Dashboard from './page/dashboard';
import UserList from './page/user';

function App() {

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
