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
    item?: any
}



const EditClass: React.FC<EditProps> = ({item}) => {

    const id_team = 2
    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies();
    const decoded:any = jwt_decode(cookies.token)
    const [detailClass, setDetailClass] = useState({item})
    const [name, setName] = useState("")
    const [mentor, setMentor]= useState(0)
    const [date_start, setDateStart] = useState("")
    const [date_graduate, setDateGraduate] = useState('')
    const [valueOptions, setValueOptions] = useState([])
    const [option, setOptions]= useState('')
    const MySwal = withReactContent(Swal);
    const id_detail = location?.state?.id

    console.log(id_detail)
    async function getDetailClass(id_detail:any){
        axios.get(`https://app1.mindd.site/classes/${id_detail}`,{
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        })
        .then((response)=>{
            setDetailClass(response.data.data)
            console.log(response.data.data)
        })
        .catch((error) => {
            console.log(error);
            
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

    async function handleSubmit(e:any){
        e.preventDefault()
        const newClass = {
            name,
            date_start,
            date_graduate,
            option
        }
        axios.put(`https://app1.mindd.site/classes/${id_detail}`,{
            class_name: newClass.name, 
            date_start: newClass.date_start, 
            date_graduate: newClass.date_graduate, 
            pic_user_id: parseInt(newClass.option),
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
                text: `Edit Data ${detailClass.class_name} Success!`,
                showCancelButton: false,
            });
            navigate('/class')
        })
        .catch((error)=> {
            console.log(error)
        })
    }
    useEffect(()=>{
        getDetailClass(id_detail)
        handleGetUser()
    },[])
    return (
        <Layout>
        <div className='mx-auto my-auto border-2 rounded-lg shadow-xl'>
        <p className='ml-10 my-5 font-bold text-sky-900 text-3xl mx-auto'> Do You want to Edit Class ?? </p>
                    <form action="" className="flex flex-row space-x-20 justify-center mx-auto my-auto p-20">
                    <div className="form-control w-full max-w-xs flex flex-col">
                    <Input
                        label='Name'
                        name='name-input'
                        placeholder="BE 15"
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
                                    <button onClick={handleSubmit} className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                    </div>
                </form>
        <button className='m-2 btn btn-sm w-20 text-xs bg-orange-500 border-none hover:bg-sky-800'
        onClick={()=> navigate('/class')}
        >Back</button>
        </div>
    </Layout>
    )
}

export default EditClass