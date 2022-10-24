import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import mail from '../assets/email.png';
import linkedIn from '../assets/linkedin.png';
import github from '../assets/github.png';
import whatsapp from '../assets/watsicon.png';



function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7iuluum', 'template_mo8a9ml', form.current, 'Gxbo_RM-ckh8aQ-Rr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <>
      <h1 className="flex flex-row justify-center text-6xl mb-14 mt-[10%] text-orange-700 font-serif relative">Contactos</h1>
      <div className='relative w-full h-[78%] flex flex-row justify-between  bg-[#00000052]  font-serif' id="contactos">

        <div className='w-[50%] ml-5 flex  items-center flex-col relative '>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center w-[54vw] ">

            <h1 className='w-full flex flex-col ml-[16.5%] text-orange-600 text-4xl pt-5  '>Contactame</h1>
            <h1 className='w-[45vw] ml-0 text-white text-xl pt-10 '>Estaré feliz de responder cualquier pregunta que tengas, solo enviame un mensaje directamente al correo llenando el formulario a continuación.</h1>
            <br />
            <div className='pt-5 mx-auto'>

              <div className='col-8 form-group mx-auto'>
                <input type='text' className='w-[45vw] form-control bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block appearance-none' placeholder='Nombre' name='name' />
              </div>

              <div className='col-8 pt-5 form-group mx-auto '>
                <input type='email' className='form-control "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none' placeholder='Correo' name='email' />
              </div>

              <div className='col-8 pt-5 form-group mx-auto'>
                <input type='text' className='form-control "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none' placeholder='Asunto' name='subject' />
              </div>

              <div className='col-8 pt-5 form-group mx-auto'>
                <textarea className='form-control w-[45vw] px-4 py-2 ' cols='30' rows='8' placeholder='Tu mensaje' name='message'></textarea>
              </div>

              <div className='w-full flex justify-center pt-8'>
                <input className=" py-2 px-8 mt-5 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-900 hover:bg-gray-900 hover:text-orange-600 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-gray-700 "
                  type="submit"
                  value="Enviar"
                />
              </div>
            </div>
          </form>
        </div>

        <div className='w-100 h-full flex  items-center flex-col relative '>

          <h1 className='w-full  text-orange-600 text-4xl pt-5 flex flex-col '>Tambien puedes comunicarte por:</h1>
          <h1 className='w-[45vw] ml-0 text-white text-xl pt-10'>LLamadas, whatsapp o correo:</h1>
          <br />
          <div className='pt-5 mx-auto'>

            <a href="https://api.whatsapp.com/send/?phone=51917341261" className="w-16 flex flex-row " target="_blank">
              <img src={whatsapp} className="w-16 rounded-full scale-80 hover:scale-150 ease-in duration-500" title="WHATSAPP" />
              <h1 className='p-4 text-white text-lg cursor-pointer underline hover:text-orange-600'>+51917341261</h1>
            </a>
            <br />

            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="w-16 flex flex-row" target="_blank">
              <img src={mail} className="w-16 scale-80 hover:scale-150 ease-in duration-500" title="CORREO" />
              <h1 className='p-4 text-white text-lg cursor-pointer underline hover:text-orange-600'>rafael18282@gmail.com</h1>
            </a>
            <br />

            <h1 className='text-white w-[45vw] text-xl '>En las redes:</h1>
            <br />

            <a href="https://linkedin.com/in/rafaelgbetancourto" className="w-18  flex flex-row " target="_blank">
              <img src={linkedIn} className="w-16 rounded-full scale-80 hover:scale-150 ease-in duration-500 " title="LINKEDIN" />
              <h1 className='p-4 text-white text-lg cursor-pointer underline hover:text-orange-600'>Rafael Betancourt</h1>
            </a>
            <br />
            <a href="https://github.com/RafaelBetancourt" className="w-18 flex flex-row" target="_blank">
              <img src={github} className="scale-80 hover:scale-150 ease-in duration-500 cursor-pointer " title="GITHUB" />
              <h1 className='p-4 text-white text-lg cursor-pointer underline hover:text-orange-600'>Rafael Betancourt</h1>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts;

