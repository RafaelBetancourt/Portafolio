

import React from 'react';
import proyecto1 from '../assets/fitFocus.png';
import proyecto2 from '../assets/worldApp.png';
import proyecto3 from '../assets/weather.png';

function Projects() {



    return (

        <div className='h-[80vh] pt-28  '>
            <h1 className="flex flex-row justify-center text-6xl mb-14 text-orange-100 font-serif">Proyectos</h1>
            <div className='flex flex-row h-[50vh] pt-28 pb-10 '>
                <a href="https://github.com/RafaelBetancourt/Fit-Focus" target="_blank" className="flex flex-col h-100 items-center ml-10 bg-white rounded-lg border shadow-md md:flex-col md:max-w-xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-[70%] md:rounded-lg md:rounded-l-lg" src={proyecto1} alt="" />
                    <div className="flex flex-col p-4 leading-normal">
                        <h5 className="mb-2 w-[26vw] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fit Focus</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto grupal para la graduacion en Henry.</p>
                    </div>
                </a>
                <a href="https://github.com/RafaelBetancourt/P.I---COUNTRIES" target="_blank" className="flex flex-col h-100 items-center ml-10 bg-white rounded-lg border shadow-md md:flex-col md:max-w-xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-[70%] md:rounded-lg md:rounded-l-lg " src={proyecto2} alt="" />
                    <div className="flex flex-col p-4 leading-normal">
                        <h5 className="mb-2 w-[26vw] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My World App</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto individual en Henry.</p>
                    </div>
                </a>
                <a href="https://github.com/RafaelBetancourt/Weather-App" target="_blank" className="flex flex-col h-100 items-center ml-10 bg-white rounded-lg border shadow-md md:flex-col md:max-w-xl hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-[70%] md:rounded-lg md:rounded-l-lg " src={proyecto3} alt="" />
                    <div className="flex flex-col p-4 leading-normal">
                        <h5 className="mb-2 w-[26vw] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weather App</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Proyecto individual en Henry.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects




// <h1 className="flex flex-row justify-center text-6xl mb-14 text-orange-100 font-serif">Proyectos</h1>
//             <div id="animation-carousel" className="relative" data-carousel="static">

//                 <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

//                     <div className=" duration-100 ease-linear" data-carousel-item="active">
//                         <img src={proyecto1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     <div className=" duration-100 ease-linear" data-carousel-item="active">
//                         <img src={proyecto2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     <div className=" duration-100 ease-linear" data-carousel-item="active">
//                         <img src={proyecto3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//                     </div>

//                     {/* <div className=" duration-200 ease-linear" data-carousel-item>
//           <img src={} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//       </div>

//       <div className=" duration-200 ease-linear" data-carousel-item>
//           <img src={} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//       </div> */}
//                 </div>

//                 <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                         <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//                         <span className="sr-only">Previous</span>
//                     </span>
//                 </button>
//                 <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                         <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//                         <span className="sr-only">Next</span>
//                     </span>
//                 </button>
//             </div>