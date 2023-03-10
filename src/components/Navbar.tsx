import React, { Component } from 'react';
import { Link } from "react-router-dom";

import back from "../assets/back.png";

interface NavbarProps{
    isOn?: React.MouseEventHandler
    isOf?: React.MouseEventHandler
    name?: string
    handleEdit?: React.MouseEventHandler
}

const Navbar: React.FC<NavbarProps> = ({
    isOn,
    isOf,
    name,
    handleEdit
}) => {
    return(
        <nav
            className="flex flex-row fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10"
        >
            <div className="flex-1 items-center">
                <section className='navbar-start'>
                <label className="btn btn-circle swap swap-rotate">
                    <input type="checkbox" />  
                    <svg onClick={isOf} className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <svg onClick={isOf} className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
                </section>
            </div>
            <div className="flex-1">
                <section className='navbar-end justify-end font-semibold text-sky-900'>
                    <div onClick={handleEdit}>
                        Hii {name}!!!
                    </div>  
                </section>
            </div>
        </nav>
    )
}

export default Navbar;