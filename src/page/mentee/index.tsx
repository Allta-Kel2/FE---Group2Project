import React from 'react'
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";

const Mentee = () => {

    const navigate = useNavigate()

    return (
        <Layout> 
            <SideBar 
            main='text-sky-900 '
            activeMentee='border-orange-600'
            activeTextMentee='text-orange-500'
            handleToDashboard={()=> navigate('/dashboard')}
            handleToMentee={()=> navigate('/mentee')}
            handleToUser={()=> navigate('/user')}
            handleToClass={() => navigate('/class')}
            />
        </Layout>
    )
}

export default Mentee