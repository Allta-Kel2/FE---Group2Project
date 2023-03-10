import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

//import axios from "axios";


import Login from './page/auth/Login';
import Dashboard from './page/dashboard';
import UserList from './page/user';
import Mentee from './page/mentee';
import ClassPage from './page/class';

import AddNewMentee from './page/mentee/AddNewMentee';
import DetailMentee from './page/mentee/DetailMentee';
import EditUser from './page/editUser';
import EditClass from './page/editClass';

//axios.defaults.baseURL = "https://app1.mindd.site/";

function App() {
  const [cookie, removeCookie] = useCookies(["token"]);
  // const checkToken = cookie.token;

  // axios.interceptors.request.use(function (config) {
  //   config.headers = config.headers ?? {};
  //   config.headers.Authorization = `Bearer ${checkToken}`;
  //   config.headers.contenttype = "multipart/form-data";
  //   return config;
  // });
    

  // axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     const { data } = error.response;
  //     if (
  //       data === "Missing or malformed JWT" ||
  //       [401, 403].includes(data.code)
  //     ) {
  //       removeCookie("token", {path:"/"});
  //     }
  //     return Promise.reject(error);
  //   }
  // );


  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/mentee" element={<Mentee />} />
          <Route path="/mentee/detailmentee" element={<DetailMentee />} />
          <Route path="/mentee/addnewmentee" element={<AddNewMentee />} />
          <Route path="/class" element={<ClassPage />} />
          <Route path="/editUser/:full_name" element={<EditUser />}/>
          <Route path="/editClass/:Class_name" element={<EditClass />}/>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
