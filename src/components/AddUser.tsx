import React from 'react'

interface AddUserProps{
    handleSubmit: React.FormEventHandler
    nameValue: any
    emailValue: any
    phoneNumberValue: any
    teamIdValue: any
    passwordValue:any
    addressValue: any
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const AddUser: React.FC<AddUserProps> = ({
    handleSubmit,
    nameValue,
    emailValue,
    phoneNumberValue,
    teamIdValue,
    passwordValue,
    addressValue
}) => {
    return (
        <form action="" className="flex flex-row space-x-20 justify-center" onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Name</span>
                                </label>
                                <input value={nameValue} type="text" placeholder="User Name" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Email</span>
                                </label>
                                <input value={emailValue} type="email" placeholder="example@gmail.com" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Phone Number</span>
                                </label>
                                <input value={phoneNumberValue} type="number" placeholder="089645213567" className="input input-sm input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs flex flex-col">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Team</span>
                                </label>
                                <select value={teamIdValue} className="select select-bordered select-sm  ">
                                    <option disabled selected>Select Team</option>
                                    <option value={1}>Placement</option>
                                    <option value={2}>Mentor</option>
                                </select>
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Password</span>
                                </label>
                                <input value={passwordValue} type="password" placeholder="Set The Password" className="input input-sm input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Adress</span>
                                </label>
                                <input value={addressValue} type="text" placeholder="Set The Password" className="input input-sm input-bordered w-full max-w-xs" />
                                <button className="btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5">Submit</button>
                        </div>
                    </form>
    )
}

export default AddUser