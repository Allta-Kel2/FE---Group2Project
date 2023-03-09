import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const Dashboard = () => {

  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies();

  function handleRemoveCookie(){
    removeCookie("role", {path: '/'})
    removeCookie("id", {path: '/'})
    removeCookie("token", {path: '/'})
    navigate('/')
}
  return (
        <Layout> 
            <SideBar 
            main='text-sky-900'
            activeDashboard='border-orange-600'
            activeTextDashboard='text-orange-500'
            handleToDashboard={()=> navigate('/dashboard')}
            handleToMentee={()=> navigate('/mentee')}
            handleToUser={()=> navigate('/user')}
            handleToClass={() => navigate('/class')}
            handleLogout={() =>handleRemoveCookie()}
            />
        </Layout>
  )
}

export default Dashboard