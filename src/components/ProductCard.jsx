export default function ProductCard({ producto, onVerDetalles }) {
    return (
        <div className="bg-blanco border border-verde-claro rounded-2xl p-6 shadow-md 
                     hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            {/* Imagen del producto (placeholder) */}
            <div className="w-full h-40 bg-rosa rounded-xl mb-4 flex items-center justify-center">
                <span className="text-5xl">
                    {producto.categoriaId === 1 ? '🍦' : producto.categoriaId === 2 ? '🥛' : '🧬'}
                </span>
            </div>

            <h3 className="text-xl font-semibold text-texto mb-3">
                {producto.nombre}
            </h3>

            <p className="text-3xl font-bold text-verde mb-4">
                S/ {producto.precio.toFixed(2)}
            </p>

            <button
                onClick={() => onVerDetalles(producto)}
                className="w-full bg-gradiente-natural text-blanco py-3 rounded-xl font-semibold
                         hover:opacity-90 transition-all duration-200
                         active:scale-95"
            >
                👁️ Ver detalles
            </button>
        </div>
    );
}