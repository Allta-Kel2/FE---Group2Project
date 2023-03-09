import React,{ useState, useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
import Modal from '../../components/Modal'
import AddUser from '../../components/AddUser'
import FilterUser from '../../components/FilterUser';
import Navbar from '../../components/Navbar';
import UserTable from '../../components/UserTable';
import Table from '../../components/Table';


const UserList = () => {
    
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [responseSideBar, setResponseSideBar] = useState(false)

    
    async function handleGetUser(){
            axios.get(
            `https://app1.mindd.site/users` ,{
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjc4NTQ2NDQ1fQ.Z9PqmauuYOTWYLc0WZC3O1ZNDnTeu-V4eGFioecXeeY'
                }
            })
            .then((response) => {
                setLoading(true)
                setData(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    
        // async function addNewUser(){
        //     await axios.post(
        //         'https://app1.mindd.site/users',
        //         {
        //             full_name: "Test Name", 
        //             email: "reza@mail.com", 
        //             id_team: 2, 
        //             password: "qwerty", 
        //             phone_number: "081234", 
        //             address: "pekanbaru", 
        //             status: "active", 
        //             role: "admin"
        //         },
        //         {
        //             headers: {
        //                 Accept : 'application/json',
        //                 'Content-Type': 'application/json',
        //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjc4NTI5MjE4fQ.HFbM4djM4-kB93yeA1E5y84dqq4LfEKxRyxSGxxmB-U'   
        //             }
        //         }
        //     )
        //     .then((response) => {
        //         console.log(response.data)
        //         setData([...data])
        //     })
        // }

    useEffect(()=>{
        handleGetUser()
        // addNewUser()
    },[])
    console.log(responseSideBar)
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
        responsive={responseSideBar}
        />
        <div className="flex flex-col w-full mx-80">
            <Navbar
            isOn={()=>setResponseSideBar(false)}
            isOf={()=>setResponseSideBar(true)}
            />
            <Box
            handleToAddUser={()=>setShowModal(true)}>
                {data && loading === true ? (
                    data.map((item:any) => {
                        return(
                            <UserTable
                            key={item.id}
                            name={item.full_name}
                            email={item.email}
                            team={item.team.name}
                            role={item.role}
                            status={item.status}
                            />
                        )
                    })
                ):(
                    <h1 className="flex justify-center">Please wait ...</h1>
                )}
            </Box>
            <Modal 
            title="Add New User"
            isOpen={showModal}
            children={<AddUser/>}
            isClose={() => setShowModal(false)}
            />

        </div>
        </Layout>
    )
}

export default UserList