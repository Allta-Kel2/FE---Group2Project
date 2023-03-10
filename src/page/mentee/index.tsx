import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import BoxMentee from '../../components/BoxMentee';
import MenteeTable from '../../components/MenteeTable';

const Mentee = () => {

    const navigate = useNavigate();

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
        <div className='flex flex-col w-full mx-80'>
            <Navbar />
            
        </div>
        </Layout>
    )
}

export default Mentee
