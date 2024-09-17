"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { IntlTelInputRef } from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";

export default function Home() {
  const [tel, setTel] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const inputEle = useRef<IntlTelInputRef>(null);
  const [IntlTelInput, setIntlTelInput] = useState<any>(null);

  useEffect(() => {
    // Dynamically import the library only on the client-side
    const loadIntlTelInput = async () => {
      const moduleInt = await import("intl-tel-input/reactWithUtils");
      setIntlTelInput(() => moduleInt.default);
    };
    loadIntlTelInput();
  }, []);

  function openWhatsapp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(`https://wa.me/${tel}`, "_blank");
    inputEle.current?.getInput()?.select();
  }

  return (
    <main className="flex min-h-screen flex-col py-24 px-5 max-w-prose mx-auto">
      <h1 className="text-xl font-bold mb-3 text-center">Mandá mensajes a WhatsApp sin agendar el contacto</h1>
      <p className="mb-3">
        Aplicación para mandar mensajes de WhatsApp sin agendar contactos.
      </p>
      <p className="">
        Elegí tu país y escribí el número en formato local. Luego apretá Enviar
        para que se abra WhatsApp.
      </p>
      <form
        onSubmit={openWhatsapp}
        className="flex flex-col mt-4 md:max-w-72 md:mx-auto w-full">
        {IntlTelInput ? (
          <IntlTelInput
            ref={inputEle}
            onChangeNumber={setTel}
            onChangeValidity={setIsValid}
            initOptions={{
              initialCountry: "uy",
              autoPlaceholder: "aggressive",
              containerClass:
                "[&>input]:border [&>input]:border-sky-500 [&>input]:text-gray-900 [&>input]:px-2 [&>input]:py-1 [&>input]:rounded-sm [&>input]:w-full [&>div>div>input]:px-3 [&>div>div>input]:py-1",
            }}
          />
        ) : (
          <input type="text" className="border border-sky-500 text-gray-900 px-2 py-1 rounded-sm w-full" />
        )}

        <button type="submit" className="bg-slate-300 p-2 rounded-sm mt-4 w-full">
          Enviar
        </button>
      </form>
    </main>
  );
}
