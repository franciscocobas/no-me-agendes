'use client'
import Image from 'next/image'
import {  useState } from 'react'


export default function Home() {
  const [tel, setTel] = useState<string>('');

  function openWhatsapp() {
    const curatedNumber = tel.replaceAll(' ', '').slice(1);
    window.open(`https://wa.me/+598${curatedNumber}`, '_blank');
    setTel('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className=' text-xl font-bold '>No me agendes</h1>
      <p className=' w-96 text-center '>Aplicación para mandar mensajes de WhatsApp sin agendar contactos.</p>
      <p className=' w-96 text-center '>Escribí un número uruguayo y apretá Enviar, se abrirá whatsapp para escribirle a ese número.</p>
      <form onSubmit={openWhatsapp} className='flex flex-col mt-4'>
        <input className='border border-sky-500 text-gray-900 px-2 py-1 rounded-sm' type="tel" name="tel" id="" value={tel} onChange={(e) => {
        setTel(e.target.value)
        }} placeholder='099 123 123' />
        <button type='submit' className='bg-slate-300 p-2 rounded-sm mt-4'>Enviar</button>
      </form>
    
    </main>
  )
}
