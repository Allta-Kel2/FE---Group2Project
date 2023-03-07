import React from "react";

const BoxDash = () =>{
    return(
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow px-8 py-6 flex items-center">
                <div className="p-4 bg-orange-500 shadow rounded-t">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg> 
                </div>
                <div className="ml-6">
                    <p className="text-gray-500 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Mentee Active</p>
                    <h3 className="mb-1 leading-5 text-black dark:text-gray-100 font-bold text-2xl justify-center">320</h3>
                </div>
            </div>
        </div>
    );
};

export default BoxDash;