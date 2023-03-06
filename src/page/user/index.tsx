import React from 'react'

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const UserList = () => {
    return (
        <Layout> 
            <SideBar 
            main='text-sky-900 border-transparent'
            activeUser='border-orange-600'
            activeTextUser='text-orange-500'
            />
        </Layout>
    )
}

export default UserList