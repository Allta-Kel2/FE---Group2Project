import React from 'react'

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const Mentee = () => {
    return (
        <Layout> 
            <SideBar 
            main='text-sky-900 '
            activeMentee='border-orange-600'
            activeTextMentee='text-orange-500'
            />
        </Layout>
    )
}

export default Mentee