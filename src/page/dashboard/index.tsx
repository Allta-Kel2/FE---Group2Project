import React from 'react'
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const Dashboard = () => {

  const navigate = useNavigate()

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
            />
        </Layout>
  )
}

export default Dashboard