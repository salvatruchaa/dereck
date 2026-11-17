"use client";

import { useState } from "react";

export default function ContactoPage() {

  const [correo, setCorreo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("STATE ACTUALIZADO");
    console.log(correo);
    console.log(motivo);
    console.log(mensaje);
  };

  return (
    <section className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Formulario de Contacto
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md">

        <div className="mb-4">
          <label className="block mb-1">
            Correo
          </label>

          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Motivo
          </label>

          <input
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">
            Mensaje
          </label>

          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full border p-2 rounded"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Enviar
        </button>

      </form>

    </section>
  );
}