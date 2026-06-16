import productos from "@/data/productos";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default async function ProductoDetalle({ params }) {

    const { id } = await params;
    const producto = productos.find((p) => p.id === Number(id));
    const productosRelacionados = productos.filter((p) =>
        p.categoria === producto.categoria &&
        p.id !== producto.id
    ).slice(0, 3);
    const mensaje = `Hola, me interesa el producto: ${producto.nombre}`;
    const whatsappUrl = `https://wa.me/927743420?text=${encodeURIComponent(mensaje)}`;

    return (
        <>
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
                    {producto.caracteristicas.map((item)=>(
                        <li key={item}>
                            ✓ {item}
                        </li>
                    ))}
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
                        productosRelacionados.map((item)=>(
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