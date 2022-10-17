import React from 'react';
import rafa from '../assets/Rafael.png';



function AboutMe() {
    return (
        <div>
            <a name="inicio" />
            <h1 className="flex flex-row justify-center text-6xl mb-2 pt-28 text-orange-100 font-serif">Acerca de mi</h1>
        <div className="flex flex-row justify-center my-30 w-[100vw] h-[40vh]">
            
            <div className="flex flex-row justify-center space-x-44 pt-40  w-full ">
                <div className='text-lg text-justify w-[40vw] text-orange-100 '>
                    <h1 className="font-serif"> Hola, soy Rafael Betancourt, soy un desarrollador web full stack, he creado algunos proyectos entre ellos una página de ejercicios caseros para ayudar a las personas que desean ejercitarse desde casa, mi experiencia está dentro del front-end y las cuatro tecnologías principales de mi stack de desarrollo son Javascript, React JS, Tailwind y por supuesto HTML/CSS, sin embargo también manejo tecnologías del back-end tales como: Node JS, Sequelize, PostgreSQL, Oracle PL/SQL.
                        Me gusta estar en constante aprendizaje (en estos momentos me estoy especializando en Typescript y Mongo), me gusta tocar guitarra, caminar y preparar diversos tipos de café.
                    </h1>
                </div>
            </div>
            <div className='pl-6 space-x-44 pt-20 h-[60vh] w-[60vw]'>
                <img src={rafa} className="w-80 h-90" />
            </div>
        </div>
        </div>
    )
}

export default AboutMe