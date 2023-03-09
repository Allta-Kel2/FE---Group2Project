import React, { FC } from "react";
import logo from '../assets/logo-ALTA@2x.png'

interface SidebarProps{
    activeDashboard?: string
    activeUser?: string
    activeMentee?: string
    activeClass?: string
    activeTextUser?: string
    activeTextMentee?: string
    activeTextDashboard?: string
    activeTextClass?: string
    main?: string
    handleToDashboard?: React.MouseEventHandler
    handleToUser?: React.MouseEventHandler
    handleToMentee?: React.MouseEventHandler
    handleToClass?: React.MouseEventHandler
    responsive?: boolean
}


const SideBar:FC<SidebarProps> = ({
    activeDashboard, 
    activeUser, 
    activeMentee, 
    activeClass, 
    activeTextUser, 
    activeTextDashboard,
    activeTextMentee,
    activeTextClass,
    main,
    handleToDashboard,
    handleToMentee,
    handleToUser,
    handleToClass,
    responsive
}) => {
    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-8000 m-0 ">
            <div className={`${responsive ? "hidden" : "fixed"} fixed Sflex flex-col top-0 left-0 w-80 bg-white shadow-lg h-full border-r`}>
                <div className="flex items-center justify-center mt-4">
                <img src={logo} className='w-56' alt="Girl in a jacket" />
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow mt-6">
                <ul className="flex flex-col py-4 space-y-1">
                    <li>
                    <a href="#"
                    onClick={handleToDashboard}
                    className={`${activeDashboard} ${main} relative flex flex-row text-altaOrange items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-orange-500 border-l-4 border-transparent hover:border-orange-500 pr-6`}>
                        <span className={`inline-flex justify-center items-center ml-4 ${activeTextDashboard}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                            </svg>
                        </span>
                        <span className={`ml-5 text-xl font-semibold tracking-wide truncate ${activeTextDashboard}`}>Dashboard</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" 
                    onClick={handleToMentee}
                    className={`${activeMentee} ${main} relative flex flex-row text-midnigth items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-orange-500 border-l-4 border-transperant hover:border-orange-500 pr-6`}>
                        <span className={`inline-flex justify-center items-center ml-4 ${activeTextMentee}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>
                        </span>
                        <span className={`ml-5 text-xl font-semibold tracking-wide truncate ${activeTextMentee}`}>Mentee</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" 
                    onClick={handleToUser}
                    className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 ${main} ${activeUser} hover:text-orange-500 border-l-4 hover:border-orange-500 pr-6`}>
                        <span className={`inline-flex justify-center items-center ml-4 ${activeTextUser}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className={`ml-5 text-xl font-semibold tracking-wide truncate ${activeTextUser}`}>User</span>
                    </a>
                    </li>
                    <li>
                    <a href="#"
                    onClick={handleToClass} 
                    className={`${activeClass} ${main} relative flex flex-row text-midnigth items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-orange-500 border-l-4 border-transperant hover:border-orange-500 pr-6`}>
                        <span className={`inline-flex justify-center items-center ml-4 ${activeTextClass}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                            <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                        </svg>
                        </span>
                        <span className={`ml-5 text-xl font-semibold tracking-wide truncate ${activeTextClass}`}>Class</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" className={`text-sky-900 relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-orange-500 border-l-4 border-transparent hover:border-orange-500 pr-6`}>
                        <span className="inline-flex justify-center items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-5 text-xl font-semibold tracking-wide truncate">Logout</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar