import React from 'react';
import fitfocus from '../assets/fitfocus.mp4';
import countryfy from '../assets/countryfy.mp4';
import weather from '../assets/weatherapp.png';



function Projects() {

    return (
        <div className='w-full h-[70vh] pt-20 mt-[10%]' id="proyectos">
            <h1 className="flex flex-row justify-center text-6xl mb-14 text-orange-700 font-serif relative">Proyectos</h1>
            <div className='flex flex-row h-[50vh] w-full pt-20 pb-10 '>

                <div className="relative mx-3 ml-10">
                    <a href="https://pf-app-five.vercel.app/" target="_blank" className="absolute inset-0 z-10 bg-green-outer-light text-center flex flex-col h-[80%] items-center rounded-lg justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-500">
                        <h1 className="tracking-wider text-5xl text-orange-600 font-serif" >Fit Focus</h1>
                        <p className="mx-auto text-2xl text-orange-100 font-serif">SPA como proyecto final/grupal de curso "Full Stack Web Developer" en academia Henry.</p>
                        <p className="mx-auto text-xl text-orange-100 font-serif">Click aqui para ir a la página</p>
                    </a>
                    <a className="relative">
                        <div className="h-50 flex flex-wrap content-center ">
                            <video src={fitfocus} autoPlay loop muted className='  mx-auto rounded-lg' />
                        </div>
                    </a>
                </div>

                <div className="relative mx-3 ml-10">
                    <a href="https://github.com/RafaelBetancourt/P.I---COUNTRIES" target="_blank" className="absolute inset-0 z-10 bg-green-outer-light text-center flex flex-col h-[80%] items-center rounded-lg justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-500">
                        <h1 className="tracking-wider text-5xl text-orange-600 font-serif" >Countryfy</h1>
                        <p className="mx-auto text-2xl text-orange-100 font-serif">Proyecto individual, de tres semanas de duración, para consolidar conocimientos en Front-end, Back-end, Bases de Datos y Javascript</p>
                        <p className="mx-auto text-xl text-orange-100 font-serif">Click aqui para ir al repositorio</p>
                    </a>
                    <a className="relative">
                        <div className="h-50 w-50 flex flex-wrap content-center ">
                            <video src={countryfy} autoPlay loop muted className='mx-auto rounded-lg w-[122vw] ' />
                        </div>
                    </a>
                </div>

                <div className="relative mx-4 ml-10">
                    <a href="https://github.com/RafaelBetancourt/Weather-App" target="_blank" className="absolute inset-0 z-10 bg-green-outer-light text-center flex flex-col h-[80%] items-center rounded-lg justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-500">
                        <h1 className="tracking-wider text-5xl text-orange-600 font-serif" >Weather App</h1>
                        <p className="mx-auto text-2xl text-orange-100 font-serif">SPA de clima realizado en Henry</p>
                        <p className="mx-auto text-xl text-orange-100 font-serif">Click aqui para ir al repositorio</p>
                    </a>
                    <a className="relative">
                        <div className="h-50 flex flex-wrap content-center ">
                            <img src={weather} className="mx-auto rounded-lg " alt="weather app" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;

