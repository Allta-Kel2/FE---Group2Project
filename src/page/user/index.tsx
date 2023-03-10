import React,{ useState, useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import jwt_decode from "jwt-decode";
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";


import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Box from "../../components/Box"
import Modal from '../../components/Modal'
import AddUser from '../../components/AddUser'
import FilterUser from '../../components/FilterUser';
import Navbar from '../../components/Navbar';
import UserTable from '../../components/UserTable';
import Input from '../../components/Input';
import Table from '../../components/Table';


type DataUser = {
    full_name: string
    team_id: number
    email: string
    password: string
    address: string
    phone_number: string
    role:string 
}


const UserList = () => {
    
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([])
    // const [newUser, setNewUser] = useState<DataUser>({
        //     full_name: "",
        //     team_id: 0,
        //     email: "",
        //     password: '',
        //     address: '',
        //     phone_number: '',
        //     role:'' 
        // })
    const [loading, setLoading] = useState(false)
    const [responseSideBar, setResponseSideBar] = useState(false)
        const [cookies, setCookie, removeCookie] = useCookies();
        const decoded:any = jwt_decode(cookies.token)
    const MySwal = withReactContent(Swal);
    const [full_name, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [valueOptions, setValueOptions] = useState([])
    const [option, setOptions] = useState('')
    const [reload, setReloads] = useState(false)
    // const [newUser, setNewUser] = useState<DataUser>({
    //     team_id: 0, 
    //     full_name: "", 
    //     email: "", 
    //     password: "",
    //     address: "",
    //     phone_number: "",
    //     role: "user"
    // })
    

        async function handleGetUser(){
            await axios.get(
            `https://app1.mindd.site/users` ,{
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.token}`
                }
            })
            .then((response) => {
                setLoading(true)
                setData(response.data.data)
                console.log("data",response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
        function handleRemoveCookie(){
            removeCookie("role", {path: '/'})
            removeCookie("id", {path: '/'})
            removeCookie("token", {path: '/'})
            navigate('/')
        }

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
                setData(response.data.data.filter((item:any) => item.id !== id ))
                MySwal.fire({
                    title: "Delete User!",
                    text: "Delete User Success!",
                    showCancelButton: false,
                });
                window.location.reload(true)
            })
            .catch((error) => {
                console.log(error)
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

        const handleAddNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
            setLoading(true)
            e.preventDefault();
            const newUser = {
                full_name,
                email,
                phone_number,
                password,
                address,
                option
            }
            await axios.post(
                'https://app1.mindd.site/users',
                {
                    team_id: parseInt(newUser.option), 
                    full_name: newUser.full_name, 
                    email: newUser.email, 
                    password: newUser.password,
                    address: newUser.address,
                    phone_number: newUser.phone_number,
                    role: "user"
                },
                {
                    headers: {
                        Accept : 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${cookies.token}`    
                    }
                }
            )
            .then((response) => {
                setData([...data])
                setShowModal(false)
                MySwal.fire({
                    title: "Add New User!",
                    text: "Add New User Success!",
                    showCancelButton: false,
                });
                window.location.reload(true)
            })
            .catch((error) => {
                console.log(error)
                MySwal.fire({
                    title: "Add New User",
                    text: "Failed add new user",
                    showCancelButton: false,
                });
            })
        }



    useEffect(()=>{
        handleGetUser()
        handleGetTeam()
        // handleDeleteUser()
    },[])
    // console.log(phone_number)
    // console.log(decoded)
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
            handleEdit={()=> navigate(`/editUser/${decoded.role}`,{
                state: {
                id: decoded.id
                    }    
                })}
            />
            <Box
            adminAdd={decoded.role}
            handleToAddUser={()=>setShowModal(true)}
            children={data && loading === true ? (
                data?.map((item:any, index:number) => {
                    return(
                        <UserTable
                        key={item.id}
                        no={item.id}
                        name={item.full_name}
                        team={item.team.name}
                        role={item.role}
                        email={item.email}
                        status={item.status}
                        adminAdd={decoded.role}
                        handleDelete={()=> handleDeleteUser(item.id)}
                        handleEdit={()=> navigate(`/editUser/${item.full_name}`,{
                            state: {
                            id: item.id
                                }    
                            })}
                        />
                    )
                })
            ) : (
                <h1 className="flex justify-center">Please wait ...</h1>
            )}
            />
            <Modal 
            title="Add New User"
            isOpen={showModal}
            isClose={() => setShowModal(false)}
            >
                <form action="" className="flex flex-row space-x-20 justify-center">
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <Input
                                label='Name'
                                name='name-input'
                                placeholder='Set the user name'
                                type='text'
                                value={full_name}
                                onChange={(e) => setFullName(e.target.value)}
                                />
                                <Input
                                label='Email'
                                name='email-input'
                                placeholder='example@gmail.com'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                label='Phone Number'
                                name='phone-input'
                                placeholder='09324837324'
                                type='text'
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="block text-gray-700 font-bold mb-2">Team</span>
                                </label>
                                <select onChange={(e) => setOptions(e.target.value)} className="select select-bordered select-sm  ">
                                    {valueOptions.map((item:any) => 
                                        <option key={item.id} value={item.id}>{item.name}</option>

                                    )}
                                </select>
                                <Input
                                label='Password'
                                name='password-input'
                                placeholder='Set Password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <Input
                                label='Address'
                                name='address-input'
                                placeholder='4517 Washington Ave. Manchester, Kentucky 39495'
                                type='text'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                />
                                <button onClick={handleAddNewUser} className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                        </div>
                    </form>
            </Modal>

        </div>
        </Layout>
    )
}

export default UserList