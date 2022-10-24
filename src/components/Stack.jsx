import React from 'react';
import html from '../assets/html5.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/reactjs.png';
import express from '../assets/expressjs.png';
import node from '../assets/nodejs.png';
import postgre from '../assets/postgreSQL.png';


function Stack() {

    return (
        <div className='relative w-[100%] flex justify-center p-5 space-x-20 my-[14%] mb-0 bg-black bg-opacity-30'>
            <a name="stack" />
            <img src={html} className="relative w-18  h-16  scale-80 hover:scale-150 ease-in duration-500" title="HTML5" />
            <img src={css} className="w-16 h-16 scale-80 hover:scale-150 ease-in duration-500" title="CSS3" />
            <img src={js} className="w-16 h-16 scale-80 hover:scale-150 ease-in duration-500" title="Javascript" />
            <img src={react} className="w-18 h-16 scale-80 hover:scale-150 ease-in duration-500" title="React JS" />
            <img src={express} className="w-18 h-16 scale-80 hover:scale-150 ease-in duration-500" title="Express" />
            <img src={node} className="w-16 h-16 scale-80 hover:scale-150 ease-in duration-500" title="Node JS" />
            <img src={postgre} className="w-16 h-16 scale-80 hover:scale-150 ease-in duration-500" title="PostgreSQL" />
        </div>
    )
}

export default Stack;
