import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import axios from "axios";

import Login from './page/auth/Login';
import Dashboard from './page/dashboard';
import UserList from './page/user';
import Mentee from './page/mentee';
import ClassPage from './page/class';

axios.defaults.baseURL = "https://app1.mindd.site/";

function App() {
  const [cookie, removeCookie] = useCookies(["token"]);
  // const checkToken = cookie.token;

  // axios.interceptors.request.use(function (config) {
  //   config.headers = config.headers ?? {};
  //   config.headers.Authorization = `Bearer ${checkToken}`;
  //   config.headers.contenttype = "multipart/form-data";
  //   return config;
  // });
    
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
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
