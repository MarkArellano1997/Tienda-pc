export default function Categories({categorias, categoriaActual, setCategoria}) {
    return(
        <div className="flex gap-3 mb-6">
            {categorias.map((cat) => (
                <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={
                    categoriaActual === cat
                    ? "bg-blue-600 text-white px-4 py-2 rounded"
                    : "bg-black text-white px-4 py-2 rounded"
                }
                >
                {cat}
                </button>
            ))}
        </div>
    );
}