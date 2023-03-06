import React from 'react'

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
const UserList = () => {
    return (
        <Layout> 
            <SideBar 
            main='text-sky-900'
            activeUser='border-orange-600'
            activeTextUser='text-orange-500'
            />
            <Box />
        </Layout>
    )
}

export default UserList