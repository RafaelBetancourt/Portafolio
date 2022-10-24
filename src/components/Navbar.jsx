import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import logo from "../assets/LogoOrange.png";
import React, { useRef, useEffect, useState } from "react";


function Navbar() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    } 
    

    return (

        <nav className='fixed flex justify-between items-center h-20 w-full z-10 bg-black-coral bg-opacity-80  text-orange-600 shadow-sm font-serif'>

            <button onClick={handleNavigate}>
                <img src={logo} className="w-11 h-9 ml-2" />
            </button>

            <div className='px-4 cursor-pointer md:hidden'>
                <svg xmlns="" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>

            <div className="flex flex-row">
                <ul className='flex flex-row pr-8 text-lg'>

                    <Link to="inicio" smooth={true} duration={1500} className='cursor-pointer p-5'>
                        INICIO
                    </Link>

                    <Link to="proyectos" smooth={true} duration={1500} className='cursor-pointer p-5'>
                        PROYECTOS
                    </Link>

                    <Link to="contactos" smooth={true} duration={1500} className='cursor-pointer p-5'>
                        CONTACTOS
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
