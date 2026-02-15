import { useEffect, useState } from "react";
import { categorias, subcategorias, productos } from "../arrayObject/naturalito";
import ProductCard from "../components/ProductCard";
import ProductoDetalle from "../components/ProductoDetalle";

export default function ProductosPage() {
    const [cat, setCat] = useState(null);
    const [subCat, setSubCat] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState(productos);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    useEffect(() => {
        let filtrados = productos;

        if (cat) {
            filtrados = filtrados.filter(p => p.categoriaId === cat);
        }

        if (subCat) {
            filtrados = filtrados.filter(p => p.subcategoriaId === subCat);
        }

        setProductosFiltrados(filtrados);
    }, [cat, subCat]);

    const subcategoriasFiltradas = cat
        ? subcategorias.filter(s => s.categoriaId === cat)
        : [];

    const resetFiltros = () => {
        setCat(null);
        setSubCat(null);
    };

    const handleVerDetalles = (producto) => {
        setProductoSeleccionado(producto);
    };

    const handleCerrarDetalle = () => {
        setProductoSeleccionado(null);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-4xl font-bold text-texto mb-6">
                🛒 Todos Nuestros <span className="text-verde">Productos</span>
            </h1>

            {/* Filtros */}
            <div className="mb-8">
                <p className="font-semibold text-lg text-texto mb-3">
                    Selecciona una categoría:
                </p>
                <div className="flex gap-3 flex-wrap mb-4">
                    {categorias.map(categoria => (
                        <button
                            key={categoria.id}
                            onClick={() => {
                                setCat(categoria.id);
                                setSubCat(null);
                            }}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200
                                ${cat === categoria.id
                                    ? 'bg-gradiente-natural text-blanco shadow-lg scale-105'
                                    : 'bg-blanco text-texto border border-verde-claro hover:bg-rosa'
                                }`}
                        >
                            {categoria.nombre}
                        </button>
                    ))}
                    {cat && (
                        <button
                            onClick={resetFiltros}
                            className="px-6 py-3 rounded-xl font-medium bg-rosa text-verde 
                                     hover:bg-verde hover:text-blanco transition-all duration-200
                                     border border-verde"
                        >
                            ✨ Limpiar filtros
                        </button>
                    )}
                </div>

                {/* Subcategorías */}
                {cat && subcategoriasFiltradas.length > 0 && (
                    <div className="mt-6">
                        <p className="font-semibold text-lg text-texto mb-3">
                            Subcategoría:
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {subcategoriasFiltradas.map(subcategoria => (
                                <button
                                    key={subcategoria.id}
                                    onClick={() => setSubCat(subcategoria.id)}
                                    className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200
                                        ${subCat === subcategoria.id
                                            ? 'bg-verde text-blanco shadow-md'
                                            : 'bg-verde-claro text-texto hover:bg-rosa'
                                        }`}
                                >
                                    {subcategoria.nombre}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productosFiltrados.map(producto => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onVerDetalles={handleVerDetalles}
                    />
                ))}
            </div>

            {productosFiltrados.length === 0 && (
                <div className="text-center py-16 bg-rosa rounded-2xl">
                    <p className="text-parrafo text-lg">
                        😔 No hay productos disponibles con los filtros seleccionados.
                    </p>
                </div>
            )}

            {/* Modal de detalles */}
            {productoSeleccionado && (
                <ProductoDetalle
                    producto={productoSeleccionado}
                    onClose={handleCerrarDetalle}
                />
            )}
        </div>
    );
}