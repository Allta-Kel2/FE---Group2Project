import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";

const AddNewMentee = () =>{
    const navigate = useNavigate();

    

    return(
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
            <div className="flex flex-col w-full mx-80">
                <Navbar/>
                <div className="box-border h-5/6 w-full border-2 bg-white border-2 rounded-lg shadow-lg my-36 mx-36">
                    <div className='flex flex-col border-b-2'>
                        <p className='ml-10 my-5 font-bold text-sky-900 text-4xl'> Add New Mentee </p>
                    </div>
                    <form action="" className="flex flex-row space-x-20 justify-center">
                        <div className="form-control w-full max-w-xs flex flex-col">
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Name</span>
                            </label>
                            <input type="text" placeholder="Mentee Name" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Address</span>
                                </label>
                            <input type="text" className="input input-sm form-textarea h-20 w-50 input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Home Address</span>
                                </label>
                            <input type="text" className="input input-sm form-textarea h-20 w-50 input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Gender</span>
                            </label>
                            <div className="flex space-x-20">
                                <label htmlFor="" className="label flex flex-col mx-8">
                                    <input type="radio" name="radio-1" className="radio checked:bg-orange-500"/>
                                        <span className="label-text mt-5 font-semibold text-l">Male</span> 
                                </label>
                                <label htmlFor="" className="label flex flex-col">
                                    <input type="radio" name="radio-1" className="radio checked:bg-orange-500"/>
                                        <span className="label-text font-semibold text-l">Female</span> 
                                </label>
                            </div>
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Email</span>
                            </label>
                            <input type="text" className="input input-sm input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Telegram</span>
                            </label>
                            <input type="text" className="input input-sm input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Discord</span>
                            </label>
                            <input type="text" className="input input-sm input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                            <label className="label">
                                <span className="label-text font-semibold text-2xl">Emergency Data</span>
                            </label>
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Name Parents</span>
                            </label>
                            <input type="text" placeholder="Name Parents" className="input input-sm input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Phone</span>
                            </label>
                            <input type="number" className="input input-sm input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Status</span>
                            </label>
                            <select className="select select-bordered select-sm">
                                <option disabled selected>Status</option>
                                <option >Single</option>
                                <option >Married</option>
                            </select>
                            <label className="label">
                                <span className="label-text font-semibold text-2xl">Educational Data</span>
                            </label>
                            <label className="label">
                                    <span className="label-text font-semibold text-xl">Type</span>
                                </label>
                            <div className="flex space-x-20">
                                <label htmlFor="" className="label flex flex-col mx-8">
                                    <input type="radio" name="radio-1" className="radio checked:bg-orange-500"/>
                                        <span className="label-text mt-5 font-semibold text-l">IT</span> 
                                </label>
                                <label htmlFor="" className="label flex flex-col">
                                    <input type="radio" name="radio-1" className="radio checked:bg-orange-500"/>
                                        <span className="label-text font-semibold text-l">Non-IT</span> 
                                </label>
                            </div>
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Major</span>
                            </label>
                            <input type="text" className="input input-sm input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold text-xl">Graduate</span>
                            </label>
                            <input type="number" className="input input-sm input-bordered w-full max-w-xs" />
                            <button className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AddNewMentee;