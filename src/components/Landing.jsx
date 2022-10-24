import React from 'react';
import { Link } from 'react-router-dom';
import celu from "../assets/celular.jpg";
import image from '../assets/rafab.png'

function Landing() {

    return (
        <div className='flex flex-row '>
            <div className='w-full font-serif'>
                <img src={celu} className="absolute bg-cover w-[100vw] h-[100vh] blur-sm" />

                <div className='absolute flex ml-28 mt-[10%] p-4 text-white text-6xl backdrop-blur-md rounded-sm'>
                    <div>
                        <h1 >HOLA, SOY </h1>
                    </div>
                    <div>
                        <h1 className='text-orange-600 pl-4'> RAFAEL BETANCOURT</h1>
                    </div>
                </div>

                <div className='absolute flex ml-28 mt-[16%] p-4 text-orange-600 font-medium text-5xl backdrop-blur-sm rounded-md'>
                    <h1>DESARROLLADOR WEB FULL STACK</h1>

                </div>
                <div className='absolute flex p-4 ml-28 mt-[26%] backdrop-blur-sm rounded-md' >
                    <p className='text-2xl text-orange-600 font-medium '>Si quieres conocer un poco más de mí y mi trabajo, <br /> presiona el botón a continuación</p>
                </div>

                <div className='absolute flex ml-28 mt-[32%]'>

                    <div className=''>
                        <Link to='/app' className="">
                            <button type="button" className="py-3 px-10 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-orange-600 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-700 ">CONOCE MI TRABAJO</button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='relative pl-6 pt-20 h-[60vh] w-[60vw]'>
                <img src={image} className="w-[82%] h-90" />
            </div>
        </div>
    )
}

export default Landing;
