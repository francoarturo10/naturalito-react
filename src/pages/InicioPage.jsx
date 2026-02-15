import { FaPlus, FaCity, FaWhatsapp } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import Slider from "../components/Slider";

export default function InicioPage() {

    const handleWhatsApp = () => {
        const mensaje = "Hola! Quiero información sobre Naturalito";
        const url = `https://wa.me/51936335903?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-fondo">
            <Slider
                slides={[
                    "./banner1.jpeg",
                    "./banner2.jpeg",
                    "./banner3.jpeg",
                    "./banner4.jpeg",
                    "./banner5.jpeg",
                ]}
            />

            {/* Sobre Mí */}
            <section className="px-4 py-12 text-center max-w-6xl mx-auto">
                <div className="bg-rosa/50 rounded-2xl py-8 px-6 mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-texto mb-4">
                        👩🏻‍🦱 Sobre <span className="text-verde">Mí</span>
                    </h1>
                    <p className="text-lg md:text-xl text-parrafo">
                        Conoce la historia detrás de <span className="text-verde font-bold">Naturalito</span> y mi pasión por los probióticos naturales
                    </p>
                </div>

                <div className="bg-blanco rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex flex-col items-center gap-4 md:w-1/3">
                        <div className="w-40 h-40 bg-rosa rounded-full flex items-center justify-center">
                            <img src="./kefir.png" alt="kefir" className="w-28" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-texto">Maria</h2>
                            <p className="text-lg md:text-xl text-verde font-semibold">Fundadora de Naturalito</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 md:w-2/3">
                        <div className="bg-verde-claro/20 rounded-2xl p-6 text-left">
                            <h3 className="text-xl font-semibold text-parrafo mb-3">Mi Historia</h3>
                            <p className="text-parrafo leading-relaxed">
                                Maria Claudia Aguilar - Fundadora de Naturalito, ipsum dolor sit amet consectetur adipisicing elit. Vitae cum harum
                                nihil impedit ratione expedita alias facilis nemo rerum. Quae deleniti sequi
                                magnam sint odio odit, fugit quas accusantium porro?
                            </p>
                        </div>
                        <div className="bg-verde-claro/20 rounded-2xl p-6 text-left">
                            <h3 className="text-xl font-semibold text-texto mb-3">Mi Compromiso</h3>
                            <p className="text-parrafo leading-relaxed">
                                Cada búlgaro que envío es cultivado con amor y cuidado personal. No uso procesos industriales ni químicos.
                                Mi misión es que cada persona reciba búlgaros 100% vivos y auténticos, tal como los recibí yo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Cards */}
            <section className="px-4 pb-8 flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                <div className="bg-blanco rounded-2xl p-4 flex gap-4 items-center flex-1 min-w-62.5">
                    <FaCity size={40} className="text-verde shrink-0" />
                    <div>
                        <h3 className="text-texto font-semibold">Productos para Trujillo</h3>
                        <p className="text-parrafo text-sm">Delivery rápido</p>
                    </div>
                </div>
                <div className="bg-blanco rounded-2xl p-4 flex gap-4 items-center flex-1 min-w-62.5">
                    <FaPlus size={40} className="text-verde shrink-0" />
                    <div>
                        <p className="text-texto font-semibold">Clientes felices</p>
                        <p className="text-parrafo text-sm">100% Naturales</p>
                    </div>
                </div>
            </section>

            {/* ¿Qué es el Kéfir? */}
            <section className="px-4 py-12 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-texto mb-4">
                        ¿Qué es el <span className="text-verde">Kéfir</span>?
                    </h2>
                    <p className="text-parrafo leading-relaxed">
                        Bebida fermentada, rica en probióticos, obtenida al fermentar leche con nódulos de
                        kéfir (búlgaros). Ayuda a la digestión, fortalece el sistema inmune y equilibra
                        la flora intestinal.
                    </p>
                </div>

                <div className="bg-blanco rounded-3xl overflow-hidden shadow-lg">
                    <div className="h-64 md:h-80 overflow-hidden">
                        <img src="./bulgaro.jpg" alt="búlgaros" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-texto mb-2">
                            Los Búlgaros: Pequeños granos
                        </h3>
                        <p className="text-parrafo font-semibold mb-4">
                            Los búlgaros son organismos vivos microscópicos que parecen coliflor
                        </p>
                        <p className="text-texto/70 mb-6">
                            Cuando pones estos búlgaros en leche, "se comen" la lactosa y crean el kéfir: una
                            bebida súper nutritiva llena de probióticos buenos para tu salud.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <div className="border-2 border-verde/50 rounded-2xl text-center px-6 py-4">
                                <p className="text-2xl text-verde font-bold">30+</p>
                                <p className="text-texto font-semibold text-sm">Cepas probióticas</p>
                            </div>
                            <div className="border-2 border-verde/50 rounded-2xl text-center px-6 py-4">
                                <p className="text-2xl text-verde font-bold">24h</p>
                                <p className="text-texto font-semibold text-sm">De fermentación</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Transformación */}
            <section className="px-4 py-8 max-w-4xl mx-auto">
                <div className="bg-gradiente-natural rounded-3xl p-8 md:p-12 text-center text-blanco">
                    <span className="text-5xl block mb-4">🚀</span>
                    <h2 className="text-xl md:text-2xl font-semibold mb-3">
                        ¿Listo para transformar tu salud?
                    </h2>
                    <p className="text-blanco-humo mb-6">
                        Únete a miles de peruanos que ya experimentan los beneficios del kéfir natural
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-blanco text-verde rounded-xl font-semibold hover:bg-blanco-humo transition-colors">
                            🧬 Descubre TODO sobre el Kéfir
                        </button>
                        <button className="px-6 py-3 bg-blanco text-verde rounded-xl font-semibold hover:bg-blanco-humo transition-colors">
                            🛒 Ver Productos
                        </button>
                    </div>
                </div>
            </section>

            {/* ¿Por qué elegir Naturalito? */}
            <section className="px-4 py-12 max-w-4xl mx-auto">
                <div className="bg-blanco rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-texto mb-2">
                            ✨ ¿Por qué elegir Naturalito?
                        </h2>
                        <p className="text-parrafo">Tu salud merece lo mejor</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-verde-claro/30 rounded-2xl p-6 text-center">
                            <span className="text-4xl bg-rosa p-3 rounded-full inline-block mb-4">🌱</span>
                            <p className="font-semibold text-texto mb-2">100% Natural</p>
                            <p className="text-sm text-parrafo">Sin químicos ni conservantes</p>
                        </div>
                        <div className="bg-verde-claro/30 rounded-2xl p-6 text-center">
                            <span className="text-4xl bg-rosa p-3 rounded-full inline-block mb-4">🚚</span>
                            <p className="font-semibold text-texto mb-2">Entrega Rápida</p>
                            <p className="text-sm text-parrafo">Llegamos a todo el Perú</p>
                        </div>
                        <div className="bg-verde-claro/30 rounded-2xl p-6 text-center">
                            <span className="text-4xl bg-rosa p-3 rounded-full inline-block mb-4">🛡️</span>
                            <p className="font-semibold text-texto mb-2">Calidad Asegurada</p>
                            <p className="text-sm text-parrafo">Productos de calidad</p>
                        </div>
                    </div>
                    <p className="text-center text-verde font-bold mt-8">
                        Más clientes satisfechos en todo el Perú
                    </p>
                </div>
            </section>

            {/* Tipos de Entrega */}
            <section className="px-4 py-16 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-texto mb-4">
                        🚚 Tipos de <span className="text-verde">Entrega</span>
                    </h2>
                    <p className="text-parrafo text-lg md:text-xl">
                        Elige el método de entrega que mejor se adapte a ti
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Delivery */}
                    <div className="bg-blanco rounded-3xl p-8 shadow-lg">
                        <div className="text-center mb-6">
                            <span className="inline-block p-5 text-5xl bg-verde-claro rounded-full mb-4">🏠</span>
                            <h3 className="text-2xl font-semibold text-texto mb-2">Delivery Trujillo</h3>
                            <p className="text-parrafo">Entrega a domicilio en distritos específicos</p>
                        </div>
                        <div className="bg-rosa rounded-2xl p-4 mb-6">
                            <p className="text-verde font-bold mb-1">Distritos disponibles:</p>
                            <p className="text-verde">Trujillo, La Esperanza, Florencia de Mora, Porvenir</p>
                        </div>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center text-verde">
                                <p className="text-lg font-bold">Costo:</p>
                                <p className="text-2xl font-semibold">S/ 15</p>
                            </div>
                            <div className="flex justify-between items-center text-verde">
                                <p className="text-lg font-bold">Tiempo:</p>
                                <p className="text-lg font-semibold">Mismo día o siguiente</p>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-gradiente-natural text-blanco rounded-2xl font-semibold">
                            🛒 Ver Productos
                        </button>
                    </div>

                    {/* Puntos de Encuentro */}
                    <div className="bg-blanco rounded-3xl p-8 shadow-lg">
                        <div className="text-center mb-6">
                            <span className="inline-block px-5 py-3 text-5xl bg-verde-claro rounded-full mb-4">📍</span>
                            <h3 className="text-2xl font-semibold text-texto mb-2">Puntos de encuentro</h3>
                            <p className="text-parrafo">Encuentros en el centro Histórico de Trujillo</p>
                        </div>
                        <div className="space-y-4 mb-6">
                            <div className="bg-rosa rounded-2xl p-4">
                                <p className="text-verde font-bold">🎉 Plazuela El Recreo</p>
                                <p className="text-verde">GRATIS - Previa coordinación por WhatsApp</p>
                            </div>
                            <div className="bg-rosa rounded-2xl p-4">
                                <p className="text-verde font-bold">🎉 Plaza de Armas - S/5</p>
                                <p className="text-verde">9-12am || 3-6pm</p>
                            </div>
                            <div className="bg-rosa rounded-2xl p-4">
                                <p className="text-verde font-bold">🎉 C.C Portal Pizarro - S/5</p>
                                <p className="text-verde">9-12am || 3-6pm</p>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-gradiente-natural text-blanco rounded-2xl font-semibold">
                            🛒 Ver Productos
                        </button>
                    </div>
                </div>

                {/* Info Importante */}
                <div className="bg-blanco rounded-3xl p-8 mt-8 shadow-lg">
                    <div className="text-center mb-8">
                        <span className="inline-block px-5 py-3 text-5xl bg-verde-claro rounded-full mb-4">💡</span>
                        <h3 className="text-2xl font-semibold text-texto">Información Importante sobre Envíos</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-rosa rounded-2xl p-6">
                            <p className="text-4xl mb-3">💳</p>
                            <p className="text-verde font-bold text-lg mb-2">Pago</p>
                            <p className="text-verde">50% de adelanto siempre. Saldo restante al enviar tu pedido.</p>
                        </div>
                        <div className="bg-rosa rounded-2xl p-6">
                            <p className="text-4xl mb-3">📱</p>
                            <p className="text-verde font-bold text-lg mb-2">Coordinación</p>
                            <p className="text-verde">Todo se coordina por WhatsApp. Te mantenemos informado paso a paso.</p>
                        </div>
                        <div className="bg-rosa rounded-2xl p-6">
                            <p className="text-4xl mb-3">🔒</p>
                            <p className="text-verde font-bold text-lg mb-2">Seguridad</p>
                            <p className="text-verde">Compra con total confianza.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-gradiente-natural-2 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-5xl mb-6">✨</p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-texto mb-4">
                        🎯 ¿Listo para transformar tu salud?
                    </h2>
                    <p className="text-texto mb-8">
                        Únete a los peruanos que ya mejoraron su digestión con nuestros búlgaros auténticos
                    </p>
                    <button className="px-8 py-4 bg-blanco-humo text-verde rounded-2xl font-bold text-lg mb-8 hover:opacity-90 transition-opacity">
                        🚀 Comenzar Mi Transformación Ahora
                    </button>
                    <div className="flex justify-center gap-6 mb-8 flex-wrap">
                        <div className="flex items-center gap-2 font-bold">
                            <CiCircleCheck size={24} strokeWidth={1.5} />
                            <p>Envío seguro</p>
                        </div>
                        <div className="flex items-center gap-2 font-bold">
                            <CiCircleCheck size={24} strokeWidth={1.5} />
                            <p>Compra segura</p>
                        </div>
                    </div>
                    <button
                        onClick={handleWhatsApp}
                        className="flex items-center justify-center gap-3 mx-auto px-6 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 transition-colors"
                    >
                        <FaWhatsapp size={30} />
                        WhatsApp: +51 936 335 903
                    </button>
                </div>
            </section>
        </div>
    );
}