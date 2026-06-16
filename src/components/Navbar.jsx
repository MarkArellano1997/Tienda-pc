export default function Navbar() {
    return(
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black">
                TiendaPC
                </h1>

                <ul className="flex gap-6 text-gray-700 font-medium">
                <li>
                    <a href="#">Inicio</a>
                </li>

                <li>
                    <a href="#">Productos</a>
                </li>

                <li>
                    <a href="#">Contacto</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}