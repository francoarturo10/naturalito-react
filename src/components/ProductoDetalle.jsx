import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductoDetalle({ producto, onClose }) {
    if (!producto) return null;

    const handleWhatsApp = () => {
        const mensaje = `Hola! Estoy interesado en: ${producto.nombre} - S/ ${producto.precio}`;
        const url = `https://wa.me/51936335903?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 bg-texto/80 flex items-center justify-center z-50 p-4">
            <div className="bg-fondo rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header con botón cerrar */}
                <div className="sticky top-0 bg-fondo flex justify-between items-center p-6 border-b border-verde-claro">
                    <h2 className="text-2xl font-bold text-texto">Detalle del Producto</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-rosa rounded-full transition-colors"
                    >
                        <IoClose size={30} className="text-texto" />
                    </button>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col gap-6">
                    {/* Imagen */}
                    <div className="w-full h-64 bg-rosa rounded-2xl flex items-center justify-center">
                        <span className="text-8xl">
                            {producto.categoriaId === 1 ? '🍦' : producto.categoriaId === 2 ? '🥛' : '🧬'}
                        </span>
                    </div>

                    {/* Nombre y Precio */}
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-texto mb-2">
                            {producto.nombre}
                        </h3>
                        <p className="text-4xl font-bold text-verde">
                            S/ {producto.precio.toFixed(2)}
                        </p>
                    </div>

                    {/* Descripción */}
                    <div className="bg-blanco rounded-2xl p-6">
                        <h4 className="text-lg font-semibold text-texto mb-3">
                            📝 Descripción
                        </h4>
                        <p className="text-parrafo leading-relaxed">
                            {producto.descripcion}
                        </p>
                    </div>

                    {/* Beneficios (solo para Kefir y Búlgaros) */}
                    {(producto.categoriaId === 2 || producto.categoriaId === 3) && (
                        <div className="bg-verde-claro/50 rounded-2xl p-6">
                            <h4 className="text-lg font-semibold text-texto mb-3">
                                ✨ Beneficios
                            </h4>
                            <ul className="space-y-2 text-parrafo">
                                <li className="flex items-start gap-2">
                                    <span className="text-verde">•</span>
                                    <span>Rico en probióticos naturales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-verde">•</span>
                                    <span>Mejora la digestión y flora intestinal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-verde">•</span>
                                    <span>Fortalece el sistema inmunológico</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-verde">•</span>
                                    <span>100% natural sin químicos ni conservantes</span>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Botón WhatsApp */}
                    <button 
                        onClick={handleWhatsApp}
                        className="w-full flex items-center justify-center gap-3 p-4 bg-green-500 
                                 text-white rounded-2xl font-bold text-lg hover:bg-green-600 
                                 transition-colors duration-200"
                    >
                        <FaWhatsapp size={30} />
                        Comprar por WhatsApp
                    </button>

                    {/* Info adicional */}
                    <div className="bg-rosa rounded-2xl p-4 text-center">
                        <p className="text-verde font-semibold text-sm">
                            🚚 Delivery disponible en Trujillo | 📍 Puntos de encuentro
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}