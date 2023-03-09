import React,{ useState, useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import jwt_decode from "jwt-decode";

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
    const [cookies, setCookie, removeCookie] = useCookies();
    const decoded:any = jwt_decode(cookies.token)
    
        async function handleGetUser(){
            axios.get(
            `https://app1.mindd.site/users` ,{
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`
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
        // async function handleGetRole(){
        //     await axios.get("https://app1.mindd.site/auth/users",{
        //         headers: {
        //             Accept: 'application/json',
        //             "Content-Type" : 'application/json',
        //             Authorization: `Bearer ${token}`    
        //         }
        //     }
        //     )
        //     .then((response)=> {
        //         console.log(response.data)
        //         setCookie("role", response.data.data.role, {path: '/'})
        //         setCookie("id", response.data.data.id, {path: '/'})
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        // }
        
        function handleRemoveCookie(){
            removeCookie("role", {path: '/'})
            removeCookie("id", {path: '/'})
            removeCookie("token", {path: '/'})
            navigate('/')
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
    console.log(decoded)
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
        handleLogout={()=> handleRemoveCookie()}
        />
        <div className="flex flex-col w-full mx-80">
            <Navbar
            isOn={()=>setResponseSideBar(false)}
            isOf={()=>setResponseSideBar(true)}
            name={decoded.role}
            />
            <Box
            adminAdd={decoded.role}
            handleToAddUser={()=>setShowModal(true)}>
                            {/* <Table 
                            data={data}
                            columns={data}
                            /> */}
                
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