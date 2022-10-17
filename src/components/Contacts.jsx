import React from 'react';
import mail from '../assets/email.png';
import linkedIn from '../assets/linkedinround.png';
import github from '../assets/github.png';
import whatsapp from '../assets/watsicon.png';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div className='bg-black-coral '>
      <h1 className='flex flex-row justify-center text-5xl pt-2 text-orange-100 font-serif'>Contactame</h1>
      <div className='flex flex-row items-center justify-around bg-black-coral h-[12vh]'>

        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="" target="_blank">
          <img src={mail} className="scale-80 hover:scale-150 ease-in duration-500" title="CORREO" />
        </a>

        <a href="https://linkedin.com/in/rafaelgbetancourto" className="" target="_blank">
          <img src={linkedIn} className="rounded-full w-[6vw] scale-80 hover:scale-150 ease-in duration-500 " title="LINKEDIN" />
        </a>

        <a href="https://github.com/RafaelBetancourt" className="" target="_blank">
          <img src={github} className="scale-80 hover:scale-150 ease-in duration-500" title="GITHUB" />
        </a>

        <a href="https://api.whatsapp.com/send/?phone=51917341261" className="w-16  " target="_blank">
          <img src={whatsapp} className="rounded-full scale-80 hover:scale-150 ease-in duration-500" title="WHATSAPP" />
        </a>

      </div>
    </div>
  )
}

export default Contacts