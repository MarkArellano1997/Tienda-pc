import Image from "next/image";
import ProductCard from "../components/ProductCard";
import productos from "../data/productos"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
        <header className="bg-black text-white p-5">
          <h1 className="text-3xl font-bold">
            Tienda Computo
          </h1>
        </header>

        <Hero/>

        <section className="p-5">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Productos Destacados
          </h2>

          <div className="flex gap-4 flex-wrap">
            {productos.map((producto) => (
              <ProductCard
              key={producto.id}
              producto={producto}
              />
            ))}
          </div>

        </section>
    </main>
  );
}
