import React,{ useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import withReactContent from "sweetalert2-react-content";
import Swal from "../../utils/Swal";
import jwt_decode from "jwt-decode";

import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import Modal from '../../components/Modal';
import FilterClass from '../../components/FilterClass';
import AddClass from '../../components/AddClass';
import Navbar from '../../components/Navbar'
import BoxClass  from '../../components/BoxClass';
import ClassTable from '../../components/ClassTable';
import Input from '../../components/Input';

const ClassPage = () => {
    
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies();
    const decoded:any = jwt_decode(cookies.token)
    const [name, setName] = useState("")
    const [mentor, setMentor]= useState(0)
    const [date_start, setDateStart] = useState("")
    const [date_graduate, setDateGraduate] = useState('')
    const [valueOptions, setValueOptions] = useState([])
    const [option, setOptions]= useState('')
    const MySwal = withReactContent(Swal);


    async function handleGetClass(){
        axios.get(
        `https://app1.mindd.site/classes`
        ,{
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        }
        )
        .then((response) => {
            setLoading(true)
            setData(response.data.data)
            console.log(response.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async function handleGetUser(){
        await axios.get("https://app1.mindd.site/users",{
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

    const handleAddNewClass = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault();
        const newClass = {
            name,
            date_start,
            date_graduate,
            option
        }
        await axios.post(
            'https://app1.mindd.site/classes',
            {
                class_name: newClass.name, 
                date_start: newClass.date_start, 
                date_graduate: newClass.date_graduate, 
                pic_user_id: parseInt(newClass.option),
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
                title: "Add New Class!",
                text: "Add New Class Success!",
                showCancelButton: false,
            });
            window.location.reload(true)
        })
        .catch((error) => {
            console.log(error)
            MySwal.fire({
                title: "Add New Class",
                text: "Failed add new Class",
                showCancelButton: false,
            });
        })
    }

    function handleDeleteClass(){

    }

    function handleEditClass(){

    }

    const id_team = 2

useEffect(()=>{
    handleGetClass()
    handleGetUser()
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
            <Navbar
            name={decoded.role}
            />
                <BoxClass
                handleToAddClass={()=> setShowModal(true)}
                children={data && loading === true ? (
                    data?.map((item:any, index:number) => {
                        return(
                            <ClassTable
                            key={item.id}
                            name={item.class_name}
                            mentorId={item.pic_user_id}
                            dateGraduete={item.date_graduate}
                            dateStart={item.date_start}
                            handleDelete={()=> handleDeleteClass()}
                            handleEdit={()=> handleEditClass()}
                            />
                        )
                    })
                ) : (
                    <h1 className="flex justify-center">Please wait ...</h1>
                )}
                />            
                <Modal 
                title="Add New Class"
                isOpen={showModal}
                isClose={() => setShowModal(false)}
                >
                    <form action="" className="flex flex-row space-x-20 my-auto justify-center">
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <Input
                                label='Name'
                                name='name-input'
                                placeholder='Set the Class name'
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                                <Input
                                label='Date Start'
                                name='dateStart-input'
                                placeholder='Set Date Start'
                                type='date'
                                value={date_start}
                                onChange={(e) => setDateStart(e.target.value)}
                                />
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <Input
                                label='Date Graduate'
                                name='dateGraduate-input'
                                placeholder='Set Date Graduate'
                                type='date'
                                value={date_graduate}
                                onChange={(e) => setDateGraduate(e.target.value)}
                                />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Mentor</span>
                                </label>
                                <select onChange={(e) => setOptions(e.target.value)} className="select select-bordered select-sm">
                                {valueOptions.map((item:any) => 
                                        <option key={item.id} value={item.id}>{id_team === item.team_id ? (item.full_name) : (console.log("error"))}</option>
                                    )}
                                </select>
                                <button onClick={handleAddNewClass} className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                        </div>
                    </form>
                </Modal>
        </div>
        </Layout>
    )
}

export default ClassPage