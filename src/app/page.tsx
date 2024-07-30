"use client"
import {  FormEvent, useRef, useState } from "react"


export default function Home() {
  const [tel, setTel] = useState<string>("");
  const [isInternationalTel, setInternationalTel] = useState<boolean>(false);
  const inputEle = useRef<any>(null);

  function openWhatsapp(e: any) {
    e.preventDefault();
    if (isInternationalTel) {
      window.open(`https://wa.me/${tel.replaceAll(" ", "").replaceAll("-", "")}`, "_blank");
    } else {
      window.open(`https://wa.me/+598${tel.replaceAll(" ", "").slice(1)}`, "_blank");
    }
    inputEle.current?.select();
  }

  return (
    <main className="flex min-h-screen flex-col py-24 px-5 max-w-prose mx-auto">
      <h1 className="text-xl font-bold mb-3 text-center">No me agendes</h1>
      <p className="mb-3">Aplicación para mandar mensajes de WhatsApp sin agendar contactos.</p>
      {
        !isInternationalTel ? (
          <p className="">Escribí un número uruguayo y apretá Enviar, se abrirá whatsapp para escribirle a ese número.</p>
        ) : (
          <p className="">Escribí un número internacional completo (incluido el símbolo de +) y apretá Enviar, se abrirá whatsapp para escribirle a ese número.</p>
        )
      }
      <p className='mt-3 text-'>Hacer click <button className="underline" onClick={() => setInternationalTel(!isInternationalTel)}>acá</button> si tengo un número {isInternationalTel ? "de Uruguay" : "internacional"}.</p>
      <form onSubmit={openWhatsapp} className="flex flex-col mt-4 md:max-w-72 md:mx-auto">
        <input className="border border-sky-500 text-gray-900 px-2 py-1 rounded-sm" type="tel" name="tel" id="" value={tel} 
          onChange={(e) => setTel(e.target.value)} placeholder={ isInternationalTel ? "+54 9 3887 40-0837" : "099 123 123" }
          ref={inputEle}
        />
        <button type="submit" className="bg-slate-300 p-2 rounded-sm mt-4">Enviar</button>
      </form>
    
    </main>
  )
}
