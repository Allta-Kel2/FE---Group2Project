import React,{ useState, useContext } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
import Modal from '../../components/Modal'
import AddUser from '../../components/AddUser'
import FilterUser from '../../components/FilterUser';

const UserList = () => {
    
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    return (
        <Layout> 
            <SideBar 
            main='text-sky-900'
            activeUser='border-orange-600'
            activeTextUser='text-orange-500'
            handleToDashboard={()=> navigate('/dashboard')}
            handleToMentee={()=> navigate('/mentee')}
            handleToUser={()=> navigate('/user')}
            handleToClass={() => navigate('/class')}
            />
            <Box
            children1={<FilterUser
                handleToAddUser={()=> setShowModal(true)}/>} 
            />
            <Modal 
            title="Add New User"
            isOpen={showModal}
            children={<AddUser/>}
            isClose={() => setShowModal(false)}
            />
        </Layout>
    )
}

export default UserList