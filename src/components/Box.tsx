import React,{FC} from 'react'

import UserList from './UserList'

interface BoxProps{
    children1?: React.ReactNode
    children2?: React.ReactNode
}

const Box:FC<BoxProps> = ({children1, children2}) => {
    return (
    <div className="box-border h-5/6 w-5/6 border-2 bg-white border-2 rounded-lg shadow-lg my-20 mx-12">
        {children1}
        <div className="overflow-x-auto mt-5">
            <table className="table table-compact w-5/6 mx-auto mt-10">
                <thead>
                    <tr>
                        <th>No</th> 
                        <th>Name</th> 
                        <th>Email</th> 
                        <th>Team</th> 
                        <th>Role</th> 
                        <th>Status</th> 
                        <th>Action</th>
                    </tr>
                </thead> 
                <tbody>
                    <UserList/>
                    <UserList/>
                    <UserList/>
                    <UserList/>
                    <UserList/>
                </tbody> 
            </table>
        </div>
        <div className="flex justify-end">
            <div className="btn-group my-10 mr-20">
                <button className="btn btn-sm bg-white text-gray-800 hover:text-white">Prev</button>
                <button className="btn btn-sm">2</button>
                <button className="btn btn-sm bg-white text-gray-800 hover:text-white">Next</button>
            </div>
        </div> 
    </div>
    )
}

export default Box