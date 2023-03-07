import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
import Modal from '../../components/Modal'
import FilterClass from '../../components/FilterClass';
import AddClass from '../../components/AddClass';

const ClassPage = () => {
    

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    return (
        <Layout> 
            <SideBar 
            main='text-sky-900'
            activeClass='border-orange-600'
            activeTextClass='text-orange-500'
            handleToDashboard={()=> navigate('/dashboard')}
            handleToMentee={()=> navigate('/mentee')}
            handleToUser={()=> navigate('/user')}
            handleToClass={() => navigate('/class')}
            />
            <Box
            children1={<FilterClass
                handleToAddClass={()=> setShowModal(true)}/>} 
            />
            <Modal 
            title="Add New User"
            isOpen={showModal}
            children={<AddClass/>}
            isClose={() => setShowModal(false)}
            />
        </Layout>
    )
}

export default ClassPage