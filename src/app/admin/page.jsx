"use client";
import {useState, useEffect} from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image"
import {useRouter} from "next/navigation"

export default function AdminPage() {

    const [nombre, setNombre] = useState("");
    const [marca, setMarca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [caracteristicas, setCaracteristicas] = useState("");
    const [guardando, setGuardando] = useState(false);
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoEditando, setProductoEditando] = useState(null);
    const [stock, setStock] = useState("");
    const [imagen, setImagen] = useState(null);
    const [imagenActual, setImagenActual] = useState("");
    const router = useRouter();

    const obtenerProductos = async () => {

        setCargando(true);

        const { data, error } = await supabase
            .from("productos")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error(error);
        } else {
            setProductos(data);
        }

        setCargando(false);
    };

    useEffect(() => {
    obtenerProductos();
    }, []);

    const guardarProducto = async (e) => {
        e.preventDefault();

        if (
            !nombre.trim() ||
            !marca.trim() ||
            !categoria.trim() ||
            !precio
        ) {
            alert("Completa todos los campos obligatorios");
            return;
        }

        let imagenUrl = imagenActual;

        if (imagen) {

            const nombreArchivo = `${Date.now()}-${imagen.name}`;

            const { error: uploadError } = await supabase.storage
                .from("productos")
                .upload(nombreArchivo, imagen);

            if (uploadError) {
                alert("Error al subir imagen");
                setGuardando(false);
                return;
            }

            const { data } = supabase.storage
                .from("productos")
                .getPublicUrl(nombreArchivo);

            imagenUrl = data.publicUrl;
        }
        
        setGuardando(true);

        let error;

        if (productoEditando) {

            const { error: updateError } = await supabase
            .from("productos")
            .update({
                nombre,
                marca,
                categoria,
                precio: Number(precio),
                stock: Number(stock),
                caracteristicas,
                imagen: imagenUrl,
            })
            .eq("id", productoEditando);

            error = updateError;

        } else {

            const { error: insertError } = await supabase
            .from("productos")
            .insert([
                {
                nombre,
                marca,
                categoria,
                precio: Number(precio),
                stock: Number(stock),
                caracteristicas,
                imagen: imagenUrl,
                },
            ]);

            error = insertError;
        }

        if (error) {

            alert("Error al guardar");

        } else {

            alert(
            productoEditando
                ? "Producto actualizado"
                : "Producto guardado"
            );

            await obtenerProductos();

            setNombre("");
            setMarca("");
            setCategoria("");
            setPrecio("");
            setStock("");
            setCaracteristicas("");

            setProductoEditando(null);
        }

        setGuardando(false);
    };

    const eliminarProducto = async (id) => {

        const confirmar = confirm(
            "¿Deseas eliminar este producto?"
        );

        if (!confirmar) return;

        const { error } = await supabase
            .from("productos")
            .delete()
            .eq("id", id);

        if (error) {

            console.error(error);

        } else {

            await obtenerProductos();

        }

    };

    const editarProducto = (producto) => {

        setNombre(producto.nombre);
        setMarca(producto.marca);
        setCategoria(producto.categoria);
        setPrecio(producto.precio);
        setCaracteristicas(producto.caracteristicas);
        setStock(producto.stock);
        setImagenActual(producto.imagen);
        setProductoEditando(producto.id);

    };

    const cerrarSesion = async () => {

        await supabase.auth.signOut();

        window.location.href = "/login";

    };

    useEffect(() => {

        const verificarSesion = async () => {

            const { data } = await supabase.auth.getSession();

            if (!data.session) {

                router.push("/login");

            }

        };

        verificarSesion();

    }, []);

    return(
        <div className="w-full p-10">

            <div className="max-w-3xl mx-auto p-10">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-3xl font-bold">
                        Agregar Producto
                    </h1>

                    <button
                        onClick={cerrarSesion}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Cerrar Sesión
                    </button>

                </div>

                <div className="bg-gray-900 p-6 rounded-lg shadow">

                    <form className="space-y-4" onSubmit={guardarProducto}>

                        <input
                        type="text"
                        placeholder="Nombre"
                        required
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full p-3 border rounded"
                        />

                        <input
                        type="text"
                        placeholder="Marca"
                        value={marca}
                        required
                        onChange={(e) => setMarca(e.target.value)}
                        className="w-full p-3 border rounded"
                        />

                        <input
                        type="text"
                        placeholder="Categoría"
                        value={categoria}
                        required
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full p-3 border rounded"
                        />

                        <input
                        type="number"
                        placeholder="Precio"
                        value={precio}
                        required
                        onChange={(e) => setPrecio(e.target.value)}
                        className="w-full p-3 border rounded"
                        />

                        <input
                        type="text"
                        placeholder="Características separadas por comas"
                        value={caracteristicas}
                        onChange={(e) => setCaracteristicas(e.target.value)}
                        className="w-full p-3 border rounded"
                        />

                        <input
                            type="number"
                            placeholder="Stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            className="w-full p-3 border rounded"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImagen(e.target.files[0])}
                            className="w-full p-3 border rounded"
                        />

                        <button
                        type="submit"
                        disabled={guardando}
                        className="bg-blue-600 text-white px-6 py-3 rounded flex items-center gap-2 disabled:bg-gray-500"
                        >
                        {guardando ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Guardando...
                            </>
                            ) : (
                            productoEditando
                                ? "Actualizar Producto"
                                : "Guardar Producto"
                        )}
                        </button>

                    </form>

                </div>

                

            </div>

            

            {cargando ? (
            <div className="flex justify-center p-8">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            ) : (

            <>
                <h2 className="text-3xl font-bold mb-6">
                    Productos Registrados
                </h2>
                <div className="mt-10 overflow-x-auto">

                    <table className="w-full border border-gray-700 rounded-lg overflow-hidden">

                        <thead>

                        <tr className="bg-gray-800 text-white">

                            <th className="border p-3">Imagen</th>
                            <th className="border p-3">Nombre</th>
                            <th className="border p-3">Marca</th>
                            <th className="border p-3">Categoría</th>
                            <th className="border p-3">Precio</th>
                            <th className="border p-3">Stock</th>
                            <th className="border p-3">Acciones</th>

                        </tr>

                        </thead>

                        <tbody>

                        {productos.map((producto) => (

                            <tr
                            key={producto.id}
                            className="hover:bg-gray-900 transition"
                            >

                                <td className="border p-3 text-center">

                                    <Image
                                    src={producto.imagen || "/images/laptop.png"}
                                    alt={producto.nombre}
                                    width={60}
                                    height={60}
                                    className="rounded mx-auto"
                                    />

                                </td>

                                <td className="border p-3">
                                    {producto.nombre}
                                </td>

                                <td className="border p-3">
                                    {producto.marca}
                                </td>

                                <td className="border p-3">
                                    {producto.categoria}
                                </td>

                                <td className="border p-3">
                                    S/. {producto.precio}
                                </td>

                                <td className="border p-3">
                                    {producto.stock}
                                </td>

                                <td className="border p-3">

                                    <div className="flex gap-2 justify-center">

                                    <button
                                        onClick={() => editarProducto(producto)}
                                        className="bg-yellow-500 text-white px-3 py-2 rounded"
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={() => eliminarProducto(producto.id)}
                                        className="bg-red-500 text-white px-3 py-2 rounded"
                                    >
                                        Eliminar
                                    </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                        </tbody>

                    </table>

                </div>

            </>
            )}

        </div>
    );
}