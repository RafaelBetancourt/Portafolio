import React from 'react'
import cv from '../assets/cvpreview.png'

//https://drive.google.com/file/d/1RTZA9Ktn7Jle_xsGpzRSHsRWO8O-4VIb/view?usp=sharing EnglisCV

function Curriculums() {
    return (
        <div className="relative mb-[5%] mt-20 h-[60vh]">
            <a name="curriculo"/>
            <h1 className='flex flex-row justify-center text-6xl text-orange-900 font-serif'>Curriculum</h1>
            <div className='flex flex-row justify-center space-x-44 pt-16 mb-10 w-100   scale-40 hover:scale-105 ease-in duration-500'>
                
                <a href='https://drive.google.com/file/d/18hHiSZLllIDh1-_PJXEB2yzrIyuLLspB/view?usp=sharing' target='_blank'>
                    <img src={cv} className="h-[48vh] " />
                    <h1 className='flex flex-row justify-center text-lg text-orange-900 font-serif'>Descargar</h1>
                </a>
            </div>
        </div>
    )
}

export default Curriculums;
