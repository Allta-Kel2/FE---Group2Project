import React from 'react'

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const ClassPage = () => {
    return (
        <Layout> 
            <SideBar 
            main='text-sky-900 border-transparent'
            activeClass='border-orange-600'
            activeTextClass='text-orange-500'
            />
        </Layout>
    )
}

export default ClassPage