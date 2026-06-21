import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-black">
                TiendaPC
                </Link>

                <ul className="flex gap-6 text-gray-700 font-medium">
                <Link href="/">
                    Inicio
                </Link>

                <Link href="/">
                    Productos
                </Link>

                <Link href="/contacto">
                    Contacto
                </Link>
                </ul>
            </div>
        </nav>
    );
}