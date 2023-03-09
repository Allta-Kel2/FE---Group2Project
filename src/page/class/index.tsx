import React,{ useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
import Modal from '../../components/Modal'
import FilterClass from '../../components/FilterClass';
import AddClass from '../../components/AddClass';
import Navbar from '../../components/Navbar'

const ClassPage = () => {
    

    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleGetClass(){
        axios.get(
        `https://app1.mindd.site/classes`
        ,{
            headers: {
                Accept: 'Bearer token'
            }
        }
        )
        .then((response) => {
            setLoading(true)
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

useEffect(()=>{
    handleGetClass()
},[])
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
        <div className="flex flex-col w-full mx-80">
            <Navbar/>
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
        </div>
        </Layout>
    )
}

export default ClassPage