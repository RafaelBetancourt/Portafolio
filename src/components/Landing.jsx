import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import celu from "../assets/celular.jpg";


function Landing() {

    return (
        <div className='w-full '>
            <img src={celu} className="absolute bg-cover w-[100vw] h-[100vh] blur-sm" />
            <div className='pb-20'>
                <Navbar />
            </div>

            <div className='absolute flex ml-40 mt-[5%] text-white text-8xl'>
                <h1>HOLA, SOY RAFAEL</h1>
            </div>

            <div className='absolute flex ml-40 mt-[10%] pt-10 text-white text-3xl'>
                <h1>DESARROLLADOR WEB FULL STACK</h1>
            </div>

            <div className='absolute flex ml-40 mt-[30%]'>

                <div className=''>
                    <Link to='/app' className="">
                        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-orange-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-700 ">CONOCE MI TRABAJO</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;
