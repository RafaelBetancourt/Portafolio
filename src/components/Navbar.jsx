import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/LogoOrange.png";

function Navbar() {

    return (

        <nav className='fixed flex justify-between items-center h-20 w-full z-10 bg-black-coral bg-opacity-80  text-orange-600 shadow-sm font-serif'>
            <Link to="/" className='pl-8'>
                <img src={logo} className="w-11 h-9" />
            </Link>
            <div className='px-4 cursor-pointer md:hidden'>
                <svg xmlns="" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='pr-8 hidden md:block'>
                <a href='#inicio' className='p-4 '>
                    INICIO
                </a>

                <a href='#stack' className='p-4'>
                    PROYECTOS
                </a>

                <a href='#curriculo' className='p-4'>
                    CONTACTOS
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
