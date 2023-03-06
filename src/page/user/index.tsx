import React,{ useState, useContext } from 'react'
import { useCookies } from 'react-cookie';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
import Modal from '../../components/Modal'
import AddUser from '../../components/AddUser'

const UserList = () => {
    
    const [showModal, setShowModal] = useState(false)

    return (
        <Layout> 
            <SideBar 
            main='text-sky-900'
            activeUser='border-orange-600'
            activeTextUser='text-orange-500'
            />
            <Box 
            handleToAddUser={()=> setShowModal(true)}
            />
            <Modal 
            title="Add New"
            isOpen={showModal}
            children={<AddUser/>}
            isClose={() => setShowModal(false)}
            />
        </Layout>
    )
}

export default UserList