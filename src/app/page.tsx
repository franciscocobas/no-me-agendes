"use client";
import { FormEvent, useRef, useState } from "react";
import IntlTelInput, { IntlTelInputRef } from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";

export default function Home() {
  const [tel, setTel] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isInternationalTel, setInternationalTel] = useState<boolean>(false);
  const inputEle = useRef<IntlTelInputRef>(null);

  function openWhatsapp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(
      `https://wa.me/${tel}`,
      "_blank"
    );
    inputEle.current?.getInput()?.select();
  }

  return (
    <main className="flex min-h-screen flex-col py-24 px-5 max-w-prose mx-auto">
      <h1 className="text-xl font-bold mb-3 text-center">No me agendes</h1>
      <p className="mb-3">
        Aplicación para mandar mensajes de WhatsApp sin agendar contactos.
      </p>
      {!isInternationalTel ? (
        <p className="">
          Escribí un número uruguayo y apretá Enviar, se abrirá whatsapp para
          escribirle a ese número.
        </p>
      ) : (
        <p className="">
          Escribí un número internacional completo (incluido el símbolo de +) y
          apretá Enviar, se abrirá whatsapp para escribirle a ese número.
        </p>
      )}
      <p className="mt-3 text-">
        Hacer click{" "}
        <button
          className="underline"
          onClick={() => setInternationalTel(!isInternationalTel)}>
          acá
        </button>{" "}
        si tengo un número {isInternationalTel ? "de Uruguay" : "internacional"}
        .
      </p>
      <form
        onSubmit={openWhatsapp}
        className="flex flex-col mt-4 md:max-w-72 md:mx-auto">
        <IntlTelInput
          ref={inputEle}
          onChangeNumber={setTel}
          onChangeValidity={setIsValid}
          initOptions={{
            initialCountry: "uy",
            autoPlaceholder: "aggressive",
            containerClass:
              "[&>input]:border [&>input]:border-sky-500 [&>input]:text-gray-900 [&>input]:px-2 [&>input]:py-1 [&>input]:rounded-sm [&>div>div>input]:px-3 [&>div>div>input]:py-1",
          }}
        />
        <button type="submit" className="bg-slate-300 p-2 rounded-sm mt-4">
          Enviar
        </button>
      </form>
    </main>
  );
}
