import React, { useState } from "react";
import Button from './Button'


type ModalProps = {
    isOpen: boolean;
    isClose: React.MouseEventHandler;
    title: string;
    children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, isClose, title, children }) => {
    return (
        <div
        className={`${
            isOpen ? "fixed transition duration-300 ease-in" : "hidden"
        } inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50`}
        >
        <div className="bg-white rounded-lg p-6 w-3/6 h-3/6">
            <div className="flex justify-between mb-4">
            <h1 className="text-3xl text-sky-900 font-bold">
                {title}
            </h1>
            <a onClick={isClose} className="text-sky-900 hover:text-black"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
            </a>
            </div>
            <div>
                {children}
            </div>
        </div>
        </div>
    );
};

export default Modal;