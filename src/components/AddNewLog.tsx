import React from 'react';

const AddLog = () => {
    return (
        <form className="flex flex-row space-x-20 justify-center" action="" >
            <div className="form-control w-full max-w-xs flex flex-col">
                <label className="label">
                    <span className="label-text font-semibold text-xl">Status</span>
                </label>
                <input type="text" placeholder="Active" className="input input-sm input-bordered w-full max-w-xs" />
                <input 
                    type="text" 
                    placeholder='upload here!'
                    className="input input-sm input-bordered w-full max-w-xs" 
                />
            </div>
            <div className="form-control form-textarea h-24 w-64 w-full max-w-xs flex flex-col">
                <label className="label">
                    <span className="label-text font-semibold text-xl">Feedback</span>
                </label>
                <input type="Date" placeholder="Active" className="input input-sm input-bordered w-full max-w-xs" />
                <button className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
            </div>
        </form>
    )
}

export default AddLog;