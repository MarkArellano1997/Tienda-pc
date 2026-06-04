import Image from "next/image";

export default function ProductCard({ producto }) {
    return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 hover:shadow-xl transition">
        
        <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={300}
            height={200}
            className="rounded-lg w-full h-48 object-cover"
        />
        <h3 className="text-xl font-bold text-black">
        {producto.nombre}
        </h3>

        <p className="text-gray-600 mt-2">
            {producto.descripcion}
        </p>

        <p className="text-green-600 font-bold mt-3">
            ${producto.precio}
        </p>

        <button className="bg-black text-white px-4 py-2 rounded mt-4 w-full">
            Consultar
        </button>
    </div>
    );
}