import React from 'react'

interface BoxProps{
    children?: React.ReactNode
    handleToAddClass?: React.MouseEventHandler
}


const BoxClass: React.FC<BoxProps> = ({children, handleToAddClass}) => {
    return (
        <div className="box-border h-5/6 w-full border-2 bg-white border-2 rounded-lg shadow-lg my-36 mx-36">
        <div className='flex flex-col border-b-2'>
            <p className='ml-10 my-5 font-bold text-sky-900 text-4xl'> List User </p>
            <div className='box w-5/6 h-34 mx-auto mb-3'>
                <div className="grid grid-cols-3">
                    <div className='grid grid-cols-2 col-span-2 space-y-2'>
                        <div className='flex'>
                            <div className='my-auto bg-gray-300 w-28 h-8 rounded-l-lg mt-2'> 
                                <p className='ml-2 mt-1 font-semibold'>
                                    Name
                                </p>
                            </div>
                            <input type="text" placeholder="Search Name" className="input h-8 input-bordered rounded-none rounded-r-lg mt-2 input-orange w-44" />
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
                                onClick={handleToAddClass}
                                >Add New</button>
                            </div>
                        </div>
                    </div>
            </div>      
        </div>
        <div className="overflow-x-auto mt-5 mb-20">
            <table className="table table-compact w-5/6 mx-auto mt-10">
                <thead>
                    <tr>
                        <th>ID</th> 
                        <th>Name</th> 
                        <th>Mentor Id</th> 
                        <th>Date Start</th> 
                        <th>Date Graduate</th> 
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    </div>
    )
}
export default BoxClass