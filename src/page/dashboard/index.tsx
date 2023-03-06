import React from 'react'

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const Dashboard = () => {
  return (
        <Layout> 
            <SideBar 
            main='text-sky-900'
            activeDashboard='border-orange-600'
            activeTextDashboard='text-orange-500'
            />
        </Layout>
  )
}

export default Dashboard