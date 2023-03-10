import React, { FC } from "react";

interface MenteeProps{
    children?: React.ReactNode
    handleToAddMentee?: React.MouseEventHandler
}

const BoxMentee:FC<MenteeProps> = ({ children, handleToAddMentee }) =>{

    return(
        <div className="box-border h-5/6 w-full border-2 bg-white border-2 rounded-lg shadow-lg my-36 mx-36">
            <div className='flex flex-col border-b-2'>
                <p className='ml-10 my-5 font-bold text-sky-900 text-4xl'> List Mentee </p>
                <div className='box w-5/6 h-34 mx-auto mb-3'>
                    <div className="grid grid-cols-3">
                        <div className='grid grid-cols-2 col-span-2 space-y-2'>
                            <div className='flex'>
                                <div className='my-auto bg-gray-300 w-28 h-8 rounded-l-lg mt-2'> 
                                    <p className='ml-2 mt-1 font-semibold'>Name</p>
                                </div>
                                <input type="text" placeholder="Search Name" className="input h-8 input-bordered rounded-none rounded-r-lg mt-2 input-orange w-44" />
                                </div>
                                <div className='flex ml-2'>
                                    <div className='my-auto bg-gray-300 w-28 h-8 rounded-l-lg'> 
                                        <p className='ml-2 mt-1 font-semibold'>Gender</p>
                                    </div>
                                    <select className="select select-bordered rounded-none rounded-r-lg  select-sm w-44">
                                        <option disabled selected>All</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            <div className='flex'>
                                <div className='my-auto bg-gray-300 w-28 h-8 rounded-l-lg'> 
                                    <p className='ml-2 mt-1  font-semibold'>Class</p>
                                </div>
                                <select className="select select-bordered rounded-none rounded-r-lg  select-sm w-44 ">
                                    <option disabled selected>All</option>
                                    <option>FE Batch 12</option>
                                    <option>BE Batch 15</option>
                                    <option>QA Batch 9</option>
                                </select>
                            </div>
                            <div className='flex ml-2'>
                                <div className='my-auto bg-gray-300 w-28 h-8 rounded-l-lg'> 
                                    <p className='ml-2 mt-1 font-semibold'>Status</p>
                                </div>
                                <select className="select select-bordered rounded-none rounded-r-lg  select-sm w-44 ">
                                    <option disabled selected>All</option>
                                    <option>IT</option>
                                    <option>Non-IT</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 grid-flow-col gap-4 ml-8'>
                            <div className='col-span-1'>
                                <button className="btn btn-sm w-20 text-xs bg-sky-900 border-none hover:bg-orange-500">Clear</button>
                            </div>
                            <div className='col-span-1'>
                                <button className="btn btn-sm w-20 text-xs bg-orange-500 border-none hover:bg-sky-800">Search</button>
                            </div>
                            <div className="row-span-2">
                                <button className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5"
                                    onClick={handleToAddMentee} 
                                >Add Mentee</button>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
            <div className="overflow-x-auto mt-5">
                <table className="table table-compact w-5/6 mx-auto mt-10">
                    <thead>
                        <tr>
                            <th>No</th> 
                            <th>Name</th> 
                            <th>Class</th> 
                            <th>Status</th> 
                            <th>Gender</th> 
                            <th>Action</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {children}
                    </tbody> 
                </table>
            </div>
            <div className="flex justify-end">
                <div className="btn-group my-10 mr-20">
                    <button className="btn btn-sm bg-white text-gray-800 hover:text-white">Prev</button>
                    <button className="btn btn-sm">1</button>
                    <button className="btn btn-sm bg-white text-gray-800 hover:text-white">Next</button>
                </div>
            </div> 
        </div>
    )
};

export default BoxMentee;