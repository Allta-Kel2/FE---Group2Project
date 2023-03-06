import React from 'react'

const AddUser = () => {
    return (
        <form action="" className="flex flex-row space-x-20 justify-center">
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Name</span>
                                </label>
                                <input type="text" placeholder="User Name" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Email</span>
                                </label>
                                <input type="email" placeholder="example@gmail.com" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Phone Number</span>
                                </label>
                                <input type="number" placeholder="089645213567" className="input input-sm input-bordered w-full max-w-xs" />
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
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Team</span>
                                </label>
                                <select className="select select-bordered select-sm  ">
                                    <option disabled selected>Select Team</option>
                                    <option>Placement</option>
                                    <option>Mentor</option>
                                </select>
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Status</span>
                                </label>
                                <select className="select select-bordered select-sm">
                                    <option disabled selected>Active</option>
                                </select>
                                <button className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                        </div>
                    </form>
    )
}

export default AddUser