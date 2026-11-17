
"use client";

import TarjetaProductos from "../componentes/tarjetaProductos";

const PRODUCTOS = [
  { id: 1, nombre: "mouse", precio: 150, imagen: "/mouse.jfif" },
  { id: 2, nombre: "teclado", precio: 300, imagen: "/teclado.jfif" },
  { id: 3, nombre: "audifonos", precio: 450, imagen: "/audifonos.jfif" },
];

export default function ProductosPage() {
  return (
    <section className="p-6">
      <h1 className="font-bold text-2xl text-yellow-300 mb-4">
        CATÁLOGO
      </h1>

      <div className="flex flex-wrap gap-4">
        {PRODUCTOS.map((item) => (
          <TarjetaProductos
            key={item.id}
            producto={item}
          />
        ))}
      </div>
    </section>
  );
}
