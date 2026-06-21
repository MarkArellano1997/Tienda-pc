import { supabase } from "@/lib/supabase";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Link from "next/link"

export default async function ProductoDetalle({ params }) {

    const { id } = await params;

    const { data: producto } = await supabase
    .from("productos")
    .select("*")
    .eq("id", Number(id))
    .single();

    const { data: productosRelacionados } = await supabase
    .from("productos")
    .select("*")
    .eq("categoria", producto.categoria);

    const relacionadosFiltrados = productosRelacionados
    .filter((p) => p.id !== producto.id)
    .slice(0, 3);
    
    const mensaje = `Hola, me interesa el producto: ${producto.nombre}`;
    const whatsappUrl = `https://wa.me/927743420?text=${encodeURIComponent(mensaje)}`;

    return (
        <>

            <Link href="/" className="inline-block mb-6 text-blue-600 hover:underline">
                ← Volver a Productos
            </Link>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 p-10 items-center">
                
                <div>
                    <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={500}
                    height={500}
                    className="rounded-lg"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">
                    {producto.nombre}
                    </h1>
                    <p className="text-blue-600 font-semibold">
                    {producto.categoria}
                    </p>
                    <p className="text-2xl font-bold text-green-600">
                        S/.{producto.precio}
                    </p>
                    <p>{producto.descripcion}</p>
                    <ul>
                        {producto.caracteristicas.split(",").map((item) => (
                            <li key={item}>
                            ✓ {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
                

            </div>
        
            <div className="max-w-6xl mx-auto p-10">
                <h2 className="text-2xl font-bold mb-6">
                    Productos relacionados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        relacionadosFiltrados.map((item)=>(
                            <ProductCard 
                                key={item.id}
                                producto={item}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}