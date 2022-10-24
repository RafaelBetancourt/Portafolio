import React from 'react';
import rafa from '../assets/Rafael.png';
import { Typewriter } from 'react-simple-typewriter';


function AboutMe() {
    return (
        <div className='relative w-full flex flex-col' id="inicio">
            <h1 className="flex flex-row justify-center text-6xl mb-2 pt-28 text-orange-700 backdrop-blur-sm font-serif">Acerca de mi</h1>
            <div className="w-full flex flex-row justify-center h-[40vh]">
                <div className=" w-full flex flex-row justify-center space-x-40 pt-28   ">
                    <div className='text-xl text-justify w-[40vw] p-4 text-orange-700 font-serif backdrop-blur-md rounded-md '>
                        <h1>
                            <span>
                                <Typewriter
                                    loop={3}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={20}
                                    deleteSpeed={false}
                                    words={["Hola, soy Rafael Betancourt, desarrollador web, he creado algunos proyectos entre ellos una página de ejercicios caseros para ayudar a las personas que desean ejercitarse desde casa, mi experiencia está dentro del front-end y las cuatro tecnologías principales de mi stack de desarrollo son Javascript, React JS, Tailwind y por supuesto HTML/CSS, sin embargo también manejo tecnologías de back-end tales como: Node JS, Sequelize, PostgreSQL, Oracle PL/SQL. Me gusta estar en constante aprendizaje (en estos momentos me estoy especializando en Typescript y Mongo), me gusta tocar guitarra, caminar y preparar diversos tipos de café."]}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
                <div className='pl-6 space-x-44 pt-20 h-[60vh] w-[60vw]'>
                    <img src={rafa} className="w-80 h-90" />
                </div>
            </div>
            <div className='absolute ml-[47%] my-[34%]'>
                <div className='w-100 h-100 '>
                    <a href='https://drive.google.com/file/d/18hHiSZLllIDh1-_PJXEB2yzrIyuLLspB/view?usp=sharing' target='_blank'>
                        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-orange-600 focus:z-10   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-700 ">DESCARGAR CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
