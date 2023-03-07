import React from 'react'

const AddClass = () => {
    return (
        <form action="" className="flex flex-row space-x-20 justify-center">
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Name</span>
                                </label>
                                <input type="text" placeholder="Class Name" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Date Start</span>
                                </label>
                                <input type="Date" placeholder="example@gmail.com" className="input input-sm input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Date End</span>
                                </label>
                                <input type="Date" placeholder="example@gmail.com" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Mentor</span>
                                </label>
                                <select className="select select-bordered select-sm">
                                    <option disabled selected>Select Mentor</option>
                                    <option >Bagas</option>
                                    <option >Fikry</option>
                                    <option >Samsul</option>
                                    <option >RAim</option>
                                    <option >Sans</option>
                                </select>
                                <button className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                        </div>
                    </form>
    )
}

export default AddClass