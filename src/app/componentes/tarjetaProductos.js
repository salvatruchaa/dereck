
"use client";

import { useState } from "react";
import Image from "next/image";

export default function TarjetaProductos({ producto }) {
  const [estado, setEstado] = useState("Agregar");

  const handleSubmit = () => {
    setEstado(`Compraste: ${producto.nombre}`);

    alert("Producto agregado con éxito");

    console.log(
      "STATE ACTUALIZADO:",
      `Compraste: ${producto.nombre}`
    );
  };

  return (
    <div className="border p-4 rounded w-64">
      <div className="relative h-32 mb-3">
        <Image
          src={producto.imagen}
          width={100}
          height={100}
          alt={producto.nombre}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="font-bold text-lg">
        {producto.nombre}
      </h2>

      <p className="text-gray-600 mb-3">
        ${producto.precio}
      </p>

      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Comprar
      </button>

      <p className="mt-4 text-white">
        Estado: {estado}
      </p>
    </div>
  );
}
