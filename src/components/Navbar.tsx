import React, { Component } from 'react';
import { Link } from "react-router-dom";

import back from "./src/assets/back.png";

const Navbar = () => {
    return(
        <div className="navbar sticky top-0 z-50 bg-gray-100 lg:px-10 shadow-lg mb-20 py-4">
            <section className='navbar-start'>
                <Link to="/">
                    <img className='w-28 duration-300 hover:cursor-pointer  active:scale-90'
                        src={back} 
                        alt="Back"
                    />
                </Link>
            </section>
            <section className='navbar-end gap-3'>
               Hii Admin! 
            </section>
        </div>
    )
}

export default Navbar;