"use client";

import {useState} from "react"
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import productos from "../data/productos"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import Categories from "../components/Categories"


export default function Home() {

  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const categorias = [
    "Todos",
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  const productosFiltrados = productos.filter((producto) => {
  const coincideCategoria =
    categoria === "Todos" ||
    producto.categoria === categoria;

  const coincideBusqueda =
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });
  
  return (
    <main className="min-h-screen bg-gray-100">
        <Navbar/>

        <Hero/>

        <section className="p-5">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Productos Destacados
          </h2>

          <Categories
            categorias={categorias}
            categoriaActual={categoria}
            setCategoria={setCategoria}
          />

          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full md:w-96 p-3 border-2 border-gray-400 rounded-lg mb-6 bg-white text-black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard
              key={producto.id}
              producto={producto}
              />
            ))}
          </div>

        </section>

        <Footer />

        <WhatsAppButton />
    </main>
  );
}
