import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ producto }) {
    const mensaje = `Hola, me interesa el producto: ${producto.nombre}`;

    const whatsappUrl = `https://wa.me/51927743420?text=${encodeURIComponent(mensaje)}`;
    return (

    <div className="bg-white p-4 rounded-lg shadow-md w-64 hover:shadow-xl transition">
        
        <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={300}
            height={200}
            className="rounded-lg w-full h-48 object-cover"
        />
        <p className="text-sm text-blue-600 font-semibold mt-2">
            {producto.categoria}
        </p>

        {producto.oferta && (
        <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded mt-2">
            🔥 Oferta
        </span>
)}

        <h3 className="text-xl font-bold text-black">
        {producto.nombre}
        </h3>

        <p className="text-gray-600 mt-2">
            {producto.descripcion}
        </p>

        <p className="text-sm text-gray-500">
            Stock: {producto.stock}
        </p>

        <p className="text-green-600 font-bold mt-3">
            ${producto.precio}
        </p>

        <a href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-black text-white px-4 py-2 rounded mt-4 w-full">
        Consultar
        </a>
    </div>
    
    );
}