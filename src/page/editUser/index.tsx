import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'


const EditUser = () => {

    const [detailUser, setDetailUser] = useState({
        name: '',
        address: '',
        phone_number: '',
        status: Boolean,
    })
    const [doneChange, setDoneChange] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [cookies] = useCookies()
    
    const id_detail = location?.state?.id
    async function getDetailUser(id_detail:any){
        axios.get(`https://app1.mindd.site/users/${id_detail}`,{
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        })
        .then((response)=>{
            setDetailUser(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
            
        })
    }

    async function handleSubmit(e:any){
        e.preventDefault()
        axios.put(`https://app1.mindd.site/users/${id_detail}`,{
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                Authorization : `Bearer ${cookies.token}`
            }
        })
    }
    useEffect(() => {
        getDetailUser(id_detail)
    }, [])
    

    return (
        <form action="" className="flex flex-row space-x-20 justify-center">
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <Input
                                label='Name'
                                name='name-input'
                                placeholder='Set the user name'
                                type='text'
                                // value={full_name}
                                // onChange={(e) => setFullName(e.target.value)}
                                />
                                <Input
                                label='Email'
                                name='email-input'
                                placeholder='example@gmail.com'
                                type='email'
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                label='Phone Number'
                                name='phone-input'
                                placeholder='09324837324'
                                type='text'
                                // value={phone_number}
                                // onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="block text-gray-700 font-bold mb-2">Team</span>
                                </label>
                                {/* <select onChange={(e) => setOptions(e.target.value)} className="select select-bordered select-sm  ">
                                    {valueOptions.map((item:any) => 
                                        <option key={item.id} value={item.id}>{item.name}</option>

                                    )}
                                </select> */}
                                <Input
                                label='Password'
                                name='password-input'
                                placeholder='Set Password'
                                type='password'
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                                />
                                <Input
                                label='Address'
                                name='address-input'
                                placeholder='4517 Washington Ave. Manchester, Kentucky 39495'
                                type='text'
                                // value={address}
                                // onChange={(e) => setAddress(e.target.value)}
                                />
                                {/* <button onClick={handleAddNewUser} className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button> */}
                        </div>
                    </form>
    )
}

export default EditUser