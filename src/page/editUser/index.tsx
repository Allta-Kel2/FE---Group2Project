import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import jwt_decode from "jwt-decode";

interface EditProps {
    item?:any
}

const EditUser:React.FC<EditProps> = ({item}) => {
    
    const MySwal = withReactContent(Swal);
    const [detailUser, setDetailUser] = useState({item})
    const [doneChange, setDoneChange] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [cookies] = useCookies()
    const decoded:any = jwt_decode(cookies.token)
    const [full_name, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [valueOptions, setValueOptions] = useState([])
    const [option, setOptions] = useState('')
    const [valueStatus, setValueStatus] = useState([
        {
        status: true,
        name: "Active"
        },
        {
        status: false,
        name: "nonActive"
        }
    ])
    const [optionStatus, setOptionsStatus] = useState('')
    const id_detail = location?.state?.id === null ? (decoded.id) : (
        location?.state?.id
    )
    async function getDetailUser(id_detail:any){
        axios.get(`https://app1.mindd.site/users/${id_detail}`,{
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        })
        .then((response)=>{
            setDetailUser(response.data.data)
            console.log(response.data.data)
        })
        .catch((error) => {
            console.log(error);
            
        })
    }
    async function handleGetTeam(){
        await axios.get("https://app1.mindd.site/teams",{
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cookies.token}`
            }
        })
        .then((response)=> {
            setValueOptions(response.data.data)
            console.log(response.data.data)
        })
    }

useEffect(()=> {
    handleGetTeam()
},[])
    const handleDeleteUser = async (id:any) =>{
        await axios.delete(`https://app1.mindd.site/users/${id}`,
        {
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        })
        .then((response) => {
            MySwal.fire({
                title: "Delete User!",
                text: "Delete User Success!",
                showCancelButton: false,
            });
            navigate('/user')
        })
        .catch((error) => {
            console.log(error)
        })
        }
    async function handleSubmit(e:any){
        e.preventDefault()
        const newData = {
            full_name,
            email,
            phone_number,
            password,
            address,
            option,
            optionStatus
        }
        axios.put(`https://app1.mindd.site/users/${id_detail}`,{
            team_id: parseInt(newData.option), 
            full_name: newData.full_name, 
            email: newData.email, 
            password: newData.password,
            address: newData.address,
            phone_number: newData.phone_number,
            status: (/true/ || /false/).test(newData.optionStatus),
            role: "user"
        },
        {
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        })
        .then((response) => {
            console.log(response.data)
            MySwal.fire({
                title: "Edit User!",
                text: `Edit Data User Success!`,
                showCancelButton: false,
            });
            navigate('/user')
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    useEffect(() => {
        getDetailUser(id_detail)
    }, [])
    
    console.log(optionStatus)
    return (
        <Layout>
            <div className='mx-auto my-auto border-2 rounded-lg shadow-xl'>
            <p className='ml-10 my-5 font-bold text-sky-900 text-3xl mx-auto'> Do You want to Edit User ?? </p>
                        <form action="" className="flex flex-row space-x-20 justify-center mx-auto my-auto p-20">
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <Input
                                label='Name'
                                name='name-input'
                                placeholder={`Set New name`}
                                type='text'
                                value={full_name}
                                onChange={(e) => setFullName(e.target.value)}
                                />
                                <Input
                                label='Email'
                                name='email-input'
                                placeholder={`$et New Email`}
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                label='Phone Number'
                                name='phone-input'
                                placeholder={`Set New Password`}
                                type='text'
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label className="label">
                                    <span className="block text-gray-700 font-bold mb-2">Status</span>
                                </label>
                                <select onChange={(e) => setOptionsStatus(e.target.value)} placeholder={'aaa'} className="select select-bordered select-sm  ">
                                {valueStatus.map((item:any) => 
                                        <option key={item.status} value={item.status}>{item.name}</option>
                                        )}
                                </select>
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="block text-gray-700 font-bold mb-2">Team</span>
                                </label>
                                <select onChange={(e) => setOptions(e.target.value)} placeholder={`aaa`} className="select select-bordered select-sm  ">
                                    {valueOptions.map((item:any) => 
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                        
                                        )}
                                </select>
                                <Input
                                label='Address'
                                name='address-input'
                                placeholder={`Address`}
                                type='text'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                />
                                <div className='space-x-5'>
                                <button onClick={handleSubmit} className="btn btn w-20 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                                <button onClick={()=>handleDeleteUser(id_detail)} className="btn btn w-20 text-xs bg-red-500 border-none hover:bg-orange-500 mt-5">Delete</button>
                                </div>
                        </div>
                    </form>
            <button className='m-2 btn btn-sm w-20 text-xs bg-orange-500 border-none hover:bg-sky-800'
            onClick={()=> navigate('/user')}
            >Back</button>
            </div>
    </Layout>
    )
}

export default EditUser