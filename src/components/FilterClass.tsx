import React from 'react'

interface FilterClassProps{
    handleToAddClass?: React.MouseEventHandler
}

const FilterClass: React.FC<FilterClassProps> = ({handleToAddClass}) => {
    return (
        <div className='flex flex-col border-b-2'>
                <p className='ml-10 my-5 font-bold text-sky-900 text-4xl'> List Class</p>
                <div className='box w-5/6 h-34 mx-auto mb-3'>
                    <div className="flex flex-row">
                                <div className='bg-gray-300 w-28 h-8 rounded-l-lg'> 
                                    <p className='ml-2 mt-1 font-semibold'>
                                        Name
                                    </p>
                                </div>
                                <input type="text" placeholder="Search Name" className="input h-8 input-bordered rounded-none rounded-r-lg input-orange w-44" />
                                    <button className="btn btn-sm w-20 text-xs ml-10 bg-sky-900 border-none hover:bg-orange-500">Clear</button>
                                    <button className="btn btn-sm w-20 text-xs ml-10 bg-orange-500 border-none hover:bg-sky-800">Search</button>
                                    <button className="btn btn w-28 text-xs ml-10 bg-sky-900 border-none hover:bg-orange-500"
                                    onClick={handleToAddClass}
                                    >Add New</button>
                                </div>
                </div>      
            </div>
    )
}

export default FilterClass